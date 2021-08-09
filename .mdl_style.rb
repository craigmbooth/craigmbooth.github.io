all

exclude_rule 'MD032'
exclude_rule 'MD033'
exclude_rule 'MD034'
exclude_rule 'MD036'
exclude_rule 'MD046'

# MD013 Line length
# There are just a lot of these to fix
exclude_rule 'MD013'

# MD026 Trailing punctuation in header
# I write the occasional header that ends in ?
exclude_rule 'MD026'

# MD041 First line in file should be a top level header
# Excluded because Jekyll files have a preamble
exclude_rule 'MD041'