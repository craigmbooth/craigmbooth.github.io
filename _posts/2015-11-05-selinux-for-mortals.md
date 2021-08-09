---
layout: single
title: "SELinux For Mere Mortals"
excerpt: "A very short guide to SELinux"
tags: [linux, devops]
header:
  overlay_color: "#0192CA"
---

{% include video id="MxjenQ31b70" provider="youtube" %}

I've found myself for the first time in a situation where I've very suddenly needed to understand a couple of things about SELinux.  I ended up watching the talk I've linked above, SELinux for Mere Mortals, given by Thomas Cameron back in 2012.  I took notes throughout and am throwing them up here so that I can't lose them again.

# What is SELinux

SELinux is an example of a Mandatory Access Control (MAC) system.  This is as opposed to the traditional Linux access control system, which is a Discretionary Access Control system (DAC).  In a DAC there is nothing to prevent a user from ``chmod a+rwx -R *`` everything they own.  In a MAC, if there is a policy in place then even if you change the DAC then access will be stopped.

## Policies

In RHEL there are generally two SELinux policies:

* "targeted" -- If there is a policy for a process it is managed by SELinux, everything else can run fine.  There are 100's of policies predefined for different processes
* "mls" -- Can be very complex, can apply policies to all processes.

For the purposes of this document we will consider only the targeted policy.  You can tell what your system should be running by looking in ``/etc/selinux/config``, you can also check via ``/usr/sbin/sestatus``.  This will tell you what policy should be loaded, and whether SELinux is running in permissive (log things only), or enforcing mode (block inappropriate access).

There are a couple of concepts that we need:  Labeling and type enforcement

## Labeling

Files, processes, ports, etc. are all labeled with an SELinux context.  For files and directories this is stored as extended attributes on the file system.  For other things, the kernel adds that information when the service comes up.  The labels are in the following format:

```bash
user:role:type:level (optional)
```

For the targeted policy, `user`, `role` and `level` are unimportant.  We worry only about type.  For the mls policy, all of these could be used.

As an example, consider the Apache web server.  If you look at the Apache executable's SELinux context, you see the type is ``httpd_exec_t``.  You see this with ``ls -Z``.  Similarly, the config directory is labeled ``httpd_config_t``, the log file dir is ``httpd_log_t``, the init script is ``httpd_initrc_exec_t``, the ports the web server is running on are labeled with ``httpd_port_t``.  The ``_t`` should be read as type.

Labeling is simply a logical way of grouping things together.  When the web server runs, its process is labeled ``httpd_t``, which you can see with ``ps -Z``

## Type Enforcement

Continuing with the Apache example, it probably makes sense for a process running in the ``httpd_t`` context to interact with a file with the ``httpd_config_t`` label, but not for a process in that context to interact with files int he ``shadow_t`` context (e.g. the file ``/etc/shadow``).

Type enforcement is simply saying "a process running with this type can access a file labeled as that type"

# Working With SELinux

The ``semanage`` command can manage some aspects of SELinux without requiring recompilation of policy sources.

## Interacting With Labels

The ``-Z`` argument is accepted by many commands (ls, id, ps, netstat, etc).  On the file system I can create labels with ``-Z`` passed to ``cp`` and ``mkdir``.  There are also some tools for interacting directly with contexts, which will be covered later (chcon, restorecon, semanage)

In general a file inherits the context of its parent directory (unless a policy defines a rule like "if an application in foo_t creates a file in a directory labeled bar_t, transition it so the label is created with baz_t").  RPMs can also set contexts as part of the installation.

## SELinux Errors

An error means that something is wrong.  Turning off SELinux in response to this is like turning up the radio loud in a car with a noisy engine.

* It may mean that labeling is wrong
* It may mean that the policy needs to be tweaked
* There could be a bug in a policy
* You have been hacked

## SELinux Booleans

Booleans are on/off switches for SELinux.  From simple stuff like "do we allow the FTP server access to home directories" to really arcane and esoteric settings.  There are a ton of these Booleans that are predefined.

To see all the Booleans

```bash
getsebool -a
```

To see a Boolean

```bash
setsebool [-P] <name> 0/1
```

The -P makes it permanent.  Note that to help debug this, install `setroubleshoot` and `setroubleshoot-server` (then restart auditd), they will make life about a million times easier when troubleshooting policies.

To see what Booleans are set, check out /etc/selinux/targeted/modules/active, there is a file called "booleans.local" with any custom changes made on the system.  Note that the file in this directory is NOT configuration, it is reporting.  Changing the contents of this file will not affect anything, it will just be overwritten at some point.

## Restorecon

Restorecon returns contexts to whatever they should have inherited from their parent directories.

```bash
restorecon -vR /target/dir/
```

This function uses information from ``/etc/selinux/targeted/contexts/files/file_contexts`` to determine what a file or directory's context should be.  This file has entries for pretty much everything in the file system, but don't change it because your changes will be overwritten.

## Enabling SELinux

To enable SELinux, edit `/etc/selinux/config` and set `SELINUX=permissive`.  Do not set enforcing because it will likely hang at boot time.  Then, create a file in the root of the file system called `.autorelabel`, reboot and the system will relabel the file system.  This could take quite a while.

# Real World Examples

## Apache In User Homedirs

A user wants to host a website from inside their homedir.  You go into Apache's httpd.conf and allow this, but you're getting disallowed errors, even after changing permissions on the homedir.

Check the usual suspects (`/var/log/httpd/*`) and everything is 403ing.  Not too helpful, we knew that.  Take a look at `/var/log/messages` and

```bash
setroubleshoot:  SELinux is preventing /usr/bin/httpd from getattr access on the directory /home/fred.  For complete selinux messages, run [a command].
```

This command will tell you the issues that happened, and frequently give you suggestions to fix them.

## Apache In Other Directories

A user asks you to copy files from their homedir to /var/www/html.  You do so, but then get permission denied on them.  Follow the same procedure as before.  SELinux will complain about the same thing as before (homedirs).  What is going on?  A quick ``ls -Z`` will explain this.  The file you copied has type ``user_home_t`` because we moved it, not copied it.

First we need to find out what type it *should* have, just do an ``ls -Z`` on a known good directory.  You can then fix it with ``chcon`` to change the file type to ``httpd_sys_content_t``.

```bash
chcon -t httpd_sys_content_t /var/www/html/index.html
```

Or, easier, if you know you want to make one thing look like another, just use ``reference

```bash
chcon --reference /var/www/html/ /var/www/html/index.html
```

General point:  If you're getting permission denied in weird places, even when you have fixed permissions, you should check selinux in /var/log/messages.

If you just want to put everything in a directory into the context you'd expect it to have use ``restorecon``

```bash
restorecon -vR /var/www/html
```

This will tell you exactly what it changed.

## Creating a Web Directory Somewhere Nonstandard

I create the directory, update httpd.conf.  Do the usual, check the permissions, all looks good, check /var/log/messages.  It'll tell you to run a command, but this is messy because it thinks that the files should be in any one of hundreds of types.  You need to figure out which one.

You can use semanage to update the contexts of all files in a directory (note that looking in ``/etc/selinux/targeted/contexts/files/file_contexts`` will give you the default contexts).

To give a directory the same contexts as another directory, use

```bash
semanage fcontext -a -e /var/www /target/dir/
```

This command just sets the defaults, we then need to run restorecon.

## Creating Policy Modules For a New App

In the case that setting Booleans and modules is not enough, you need to create a policy.  The best way to begin doing this is to set SELinux to permissive, then run the application through all its functionality and look through the log files for all of the errors.

```bash
setenforce 0
```

Then run sealert against the latest error message.  In this case, the alert doesn't find any bools because this is a new application, so it may tell you to run audit2allow.

The way to do this is to grep whatever you're running into issues with (e.g. httpd) in `/var/log/audit/audit.log`

```bash
grep httpd /var/log/audit/audit.log | audit2allow -M namefornewpolicylocal
```

Then make the policy active following the instructions it gives you.

```bash
semodule -i namefornewpolicylocal.pp
```

In short:  Grep your error out of audit.log, pipe it to audit2allow, send the policy to semodule.
