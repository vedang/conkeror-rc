interactive("open-greader", "Go to google reader", "follow-new-buffer",
            $browser_object = "http://reader.google.com/");
define_key(content_buffer_normal_keymap, "f1", "open-greader");

interactive("open-gmail", "Go to gmail", "follow-new-buffer",
            $browser_object = "http://gmail.com/");
define_key(content_buffer_normal_keymap, "f2", "open-gmail");

