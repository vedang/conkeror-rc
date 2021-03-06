// Webjump oneliners
define_webjump("identica", "http://identi.ca/%s");
define_webjump("imdb", "http://imdb.com/find?q=%s");
define_webjump("trans", "http://translate.google.com/translate_t#auto|en|%s");
define_webjump("twit", "http://twitter.com/%s");
define_webjump("twitter", "http://twitter.com/#search?q=%s");
define_webjump("urban", "http://www.urbandictionary.com/define.php?term=%s");
define_webjump("youtube", "http://www.youtube.com/results?search_query=%s&search=Search");
define_webjump("emacswiki",
               "http://www.google.com/cse?cx=004774160799092323420%3A6-ff2s0o6yi&q=%s&sa=Search&siteurl=emacswiki.org%2F",
               $alternative="http://www.emacswiki.org/");
define_webjump("github", "http://www.github.com/search?q=%s&type=Everything&repo=&langOverride=&start_value=1");
define_webjump("bee", "http://www.beemp3.com/index.php?q=%s&st=all");
define_webjump("mdc", "https://developer.mozilla.org/Special:Search?search=%s&type=fulltext&go=Search");

// Personalized Webjumps
add_delicious_webjumps("vedang");
add_lastfm_webjumps("vedang");
