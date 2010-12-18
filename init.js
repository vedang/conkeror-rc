// Open Right-Clicked Links in New Buffers
require ("clicks-in-new-buffer.js");
clicks_in_new_buffer_target = OPEN_NEW_BUFFER_BACKGROUND;
clicks_in_new_buffer_button = 2;

// follow link in new buffer
define_key(content_buffer_normal_keymap, "d", "follow-new-buffer");
define_key(content_buffer_normal_keymap, "t", "find-url-new-buffer");

// i need my gmail hotkeys
require ("page-modes/gmail.js");
define_key(gmail_keymap, "t", "find-url-new-buffer");
define_key(gmail_keymap, "return", null, $fallthrough);

// use emacs as external editor.
editor_shell_command = "emacsclient -c";

// view source in your editor.
view_source_use_external_editor = true;

// Mozrepl
user_pref('extensions.mozrepl.autoStart', true);

let (mozrepl_init = get_home_directory()) {
        mozrepl_init.appendRelativePath(".mozrepl.js");
        session_pref('extensions.mozrepl.initUrl', make_uri(mozrepl_init).spec);
};

// let xkcd-mode put the funny alt text into the page.
xkcd_add_title = true;

// adblockplus is good
require("extensions/adblockplus.js");
