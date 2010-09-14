// Open Right-Clicked Links in New Buffers
require ("clicks-in-new-buffer.js");
clicks_in_new_buffer_target = OPEN_NEW_BUFFER_BACKGROUND;
clicks_in_new_buffer_button = 2;

// follow link in new buffer
define_key(content_buffer_normal_keymap, "d", "follow-new-buffer");

// adblockplus is good
require("extensions/adblockplus.js");

// i need my gmail hotkeys
require("page-modes/gmail.js");

// use emacs as external editor.
editor_shell_command = "emacs";

// view source in your editor.
view_source_use_external_editor = true;

// Mozrepl
user_pref('extensions.mozrepl.autoStart', true);

let (mozrepl_init = get_home_directory()) {
        mozrepl_init.appendRelativePath(".mozrepl.js");
        session_pref('extensions.mozrepl.initUrl', make_uri(mozrepl_init).spec);
};

// complete from history!
// this should be enabled by default
url_completion_use_history = true;

// let xkcd-mode put the funny alt text into the page.
xkcd_add_title = true;

