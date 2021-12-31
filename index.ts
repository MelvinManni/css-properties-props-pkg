export type ALIGN_CONTENT =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "normal"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "center safe"
  | "center unsafe"
  | "safe"
  | "unsafe";
export type ALIGN_ITEMS =
  | "normal"
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "stretch"
  | "safe"
  | "unsafe";
export type ALIGN_SELF =
  | "auto"
  | "normal"
  | "self-start"
  | "self-end"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "stretch"
  | "safe"
  | "unsafe";
export type ALL = "initial" | "inherit" | "unset" | "revert";
export type ANIMATION = string;
export type ANIMATION_DELAY = "@keyframes" | string;
export type ANIMATION_DIRECTION = "normal" | "reverse" | "alternate-reverse" | "alternate" | "@keyframes";
export type ANIMATION_DURATION = "@keyframes" | string;
export type ANIMATION_FILL_MODE = "none" | "forwards" | "both" | "backwards" | "animation-name";
export type ANIMATION_ITERATION_COUNT = "1" | "infinite" | "@keyframes";
export type ANIMATION_NAME = "none" | "@keyframes" | "@keyframes";
export type ANIMATION_PLAY_STATE = "running" | "paused" | "@keyframes";
export type ANIMATION_TIMING_FUNCTION = "ease" | "linear" | "step-start" | "step-end" | "ease-in" | "ease-out" | "ease-in-out" | "@keyframes";
export type APPEARANCE =
  | "none"
  | "auto"
  | "textfield"
  | "menulist-button"
  | "searchfield"
  | "textarea"
  | "push-button"
  | "slider-horizontal"
  | "checkbox"
  | "radio"
  | "square-button"
  | "menulist"
  | "listbox"
  | "meter"
  | "progress-bar"
  | "button"
  | "-webkit-appearance"
  | "searchfield";
export type ASPECT_RATIO = "auto" | string;
export type BACKFACE_VISIBILITY = "visible" | "hidden";
export type BACKGROUND =
  | "background-size"
  | "background-position"
  | "background-origin"
  | "background-clip"
  | "background-origin"
  | "background-origin"
  | "background-clip";
export type BACKGROUND_ATTACHMENT = "scroll" | "fixed" | "local" | "background-attachment";
export type BACKGROUND_BLEND_MODE =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";
export type BACKGROUND_CLIP = "border-box" | "padding-box" | "content-box" | "text" | "background-clip";
export type BACKGROUND_COLOR = "transparent" | "currentColor";
export type BACKGROUND_IMAGE = "none" | string;
export type BACKGROUND_ORIGIN = "padding-box" | "border-box" | "content-box" | "background-attachment";
export type BACKGROUND_POSITION = "top" | "bottom" | "left" | "right" | "center" | "right bottom" | "left top" | "center center" | "background-position";
export type BACKGROUND_REPEAT =
  | "repeat"
  | "no-repeat"
  | "space"
  | "round"
  | "repeat-y"
  | "repeat-x"
  | "repeat no-repeat"
  | "round round"
  | "space space"
  | "background-repeat";
export type BACKGROUND_SIZE = "auto" | "auto auto" | "cover" | "contain" | "background-size";
export type BLOCK_SIZE = "auto" | "max-content" | "min-content" | "available" | "fit-content";
export type BORDER = "border-image" | string;
export type BORDER_BLOCK = string;
export type BORDER_BLOCK_COLOR = string;
export type BORDER_BLOCK_END = string;
export type BORDER_BLOCK_END_COLOR = string;
export type BORDER_BLOCK_END_STYLE = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type BORDER_BLOCK_END_WIDTH = "medium" | "thin" | "thick";
export type BORDER_BLOCK_START = string;
export type BORDER_BLOCK_START_COLOR = string;
export type BORDER_BLOCK_START_STYLE = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type BORDER_BLOCK_START_WIDTH = "medium" | "thin" | "thick";
export type BORDER_BLOCK_STYLE = string;
export type BORDER_BLOCK_WIDTH = string;
export type BORDER_BOTTOM = string;
export type BORDER_BOTTOM_COLOR = "transparent" | string;
export type BORDER_BOTTOM_LEFT_RADIUS = string;
export type BORDER_BOTTOM_RIGHT_RADIUS = string;
export type BORDER_BOTTOM_STYLE = "none" | "solid" | "ridge" | "outset" | "inset" | "hidden" | "groove" | "double" | "dotted" | "dashed";
export type BORDER_BOTTOM_WIDTH = "medium" | "thin" | "thick";
export type BORDER_COLLAPSE = "separate" | "collapse";
export type BORDER_COLOR = string;
export type BORDER_END_END_RADIUS = string;
export type BORDER_END_START_RADIUS = string;
export type BORDER_IMAGE = string;
export type BORDER_IMAGE_OUTSET = string;
export type BORDER_IMAGE_REPEAT = "stretch" | "space" | "round" | "repeat" | "space round" | "stretch repeat";
export type BORDER_IMAGE_SLICE = "fill" | string;
export type BORDER_IMAGE_SOURCE = "none" | string;
export type BORDER_IMAGE_WIDTH = "1" | string;
export type BORDER_INLINE = string;
export type BORDER_INLINE_COLOR = string;
export type BORDER_INLINE_END = string;
export type BORDER_INLINE_END_COLOR = string;
export type BORDER_INLINE_END_STYLE = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type BORDER_INLINE_END_WIDTH = "medium" | "thin" | "thick";
export type BORDER_INLINE_START = string;
export type BORDER_INLINE_START_COLOR = string;
export type BORDER_INLINE_START_STYLE = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type BORDER_INLINE_START_WIDTH = "medium" | "thin" | "thick";
export type BORDER_INLINE_STYLE = string;
export type BORDER_INLINE_WIDTH = string;
export type BORDER_LEFT = string;
export type BORDER_LEFT_COLOR = "transparent" | string;
export type BORDER_LEFT_STYLE = "none" | "solid" | "ridge" | "outset" | "inset" | "hidden" | "groove" | "double" | "dotted" | "dashed";
export type BORDER_LEFT_WIDTH = "medium" | "thin" | "thick";
export type BORDER_RADIUS = string;
export type BORDER_RIGHT = string;
export type BORDER_RIGHT_COLOR = "transparent" | string;
export type BORDER_RIGHT_STYLE = "none" | "solid" | "ridge" | "outset" | "inset" | "hidden" | "groove" | "double" | "dotted" | "dashed";
export type BORDER_RIGHT_WIDTH = "medium" | "thin" | "thick";
export type BORDER_SPACING = string;
export type BORDER_START_END_RADIUS = string;
export type BORDER_START_START_RADIUS = string;
export type BORDER_STYLE = "none" | "solid" | "ridge" | "outset" | "inset" | "hidden" | "groove" | "double" | "dotted" | "dashed";
export type BORDER_TOP = string;
export type BORDER_TOP_COLOR = "transparent" | string;
export type BORDER_TOP_LEFT_RADIUS = string;
export type BORDER_TOP_RIGHT_RADIUS = string;
export type BORDER_TOP_STYLE = "none" | "solid" | "ridge" | "outset" | "inset" | "hidden" | "groove" | "double" | "dotted" | "dashed";
export type BORDER_TOP_WIDTH = "medium" | "thin" | "thick";
export type BORDER_WIDTH = string;
export type BOTTOM = "auto" | string;
export type BOX_DECORATION_BREAK = "slice" | "clone";
export type BOX_SHADOW = "none" | string;
export type BOX_SIZING = "content-box" | "border-box" | "padding-box";
export type BREAK_AFTER =
  | "auto"
  | "avoid"
  | "always"
  | "all"
  | "avoid-page"
  | "page"
  | "left"
  | "right"
  | "recto"
  | "verso"
  | "avoid-column"
  | "column"
  | "avoid-region"
  | "region";
export type BREAK_BEFORE =
  | "auto"
  | "avoid"
  | "always"
  | "all"
  | "avoid-page"
  | "page"
  | "left"
  | "right"
  | "recto"
  | "verso"
  | "avoid-column"
  | "column"
  | "avoid-region"
  | "region";
export type BREAK_INSIDE = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
export type CAPTION_SIDE = "top" | "bottom" | "inline-start" | "inline-end";
export type CARET_COLOR = "auto" | "currentColor";
export type CLEAR = "none" | "left" | "right" | "both" | "inline-start" | "inline-end";
export type CLIP = "auto" | "clip-path";
export type CLIP_PATH = "none" | "margin-box" | "border-box" | "padding-box" | "content-box" | "fill-box" | "stroke-box" | "view-box" | "clip" | "clipPath";
export type COLOR = "currentColor" | "transparent";
export type COLOR_ADJUST = "economy" | "exact";
export type COLUMN_COUNT = "auto" | string;
export type COLUMN_FILL = "balance" | "auto" | "balance-all";
export type COLUMN_GAP = "normal" | "grid-column-gap";
export type COLUMN_RULE = string;
export type COLUMN_RULE_COLOR = "currentColor" | "transparent";
export type COLUMN_RULE_STYLE = "none" | "solid" | "ridge" | "outset" | "inset" | "hidden" | "groove" | "double" | "dotted" | "dashed";
export type COLUMN_RULE_WIDTH = "medium" | "thin" | "thick";
export type COLUMN_SPAN = "none" | "all";
export type COLUMN_WIDTH = "auto" | string;
export type COLUMNS = string;
export type CONTENT = "normal" | "none" | "open-quote" | "close-quote" | "no-open-quote" | "no-close-quote" | "contents" | "::before" | "::after";
export type CONTENT_VISIBILITY = "visible" | "hidden" | "auto";
export type COUNTER_INCREMENT = "none" | string;
export type COUNTER_RESET = "none" | string;
export type COUNTER_SET = "none" | string;
export type CURSOR =
  | "auto"
  | "default"
  | "none"
  | "context-menu"
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text"
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "grab"
  | "grabbing"
  | "all-scroll"
  | "col-resize"
  | "row-resize"
  | "n-resize"
  | "s-resize"
  | "w-resize"
  | "ne-resize"
  | "nw-resize"
  | "se-resize"
  | "sw-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "zoom-in"
  | "zoom-out";
export type DIRECTION = "ltr" | "rtl";
export type DISPLAY =
  | "inline"
  | "block"
  | "inline-block"
  | "inline-table"
  | "run-in"
  | "flow"
  | "flow-root"
  | "table"
  | "flex"
  | "grid"
  | "ruby"
  | "list-item"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container"
  | "contents"
  | "none"
  | "inline-flex"
  | "inline-grid";
export type EMPTY_CELLS = "show" | "hide";
export type FILTER = "none" | "box-shadow" | "text-shadow";
export type FLEX = "none" | string;
export type FLEX_BASIS = "auto" | "content";
export type FLEX_DIRECTION = "row" | "row-reverse" | "column" | "column-reverse";
export type FLEX_FLOW = string;
export type FLEX_GROW = string;
export type FLEX_SHRINK = "1" | string;
export type FLEX_WRAP = "nowrap" | "wrap" | "wrap-reverse";
export type FLOAT = "none" | "left" | "right" | "inline-start" | "inline-end" | "block-start" | "block-end" | "snap-block" | "snap-inline" | "top" | "bottom";
export type FONT = "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar";
export type FONT_FAMILY =
  | "serif"
  | "sans-serif"
  | "cursive"
  | "fantasy"
  | "monospace"
  | "system-ui"
  | "emoji"
  | "math"
  | "fangsong"
  | "ui-serif"
  | "ui-sans-serif"
  | "ui-monospace"
  | "ui-rounded";
export type FONT_FEATURE_SETTINGS = "normal" | string;
export type FONT_KERNING = "auto" | "normal" | "none";
export type FONT_LANGUAGE_OVERRIDE = "normal" | string;
export type FONT_OPTICAL_SIZING = "auto" | "none";
export type FONT_SIZE = "medium" | "xx-small" | "x-small" | "small" | "large" | "x-large" | "xx-large" | "xxx-large" | "smaller" | "larger";
export type FONT_SIZE_ADJUST = "none" | string;
export type FONT_STRETCH =
  | "normal"
  | "semi-condensed"
  | "condensed"
  | "extra-condensed"
  | "ultra-condensed"
  | "semi-expanded"
  | "expanded"
  | "extra-expanded"
  | "ultra-expanded";
export type FONT_STYLE = "normal" | "italic" | "oblique";
export type FONT_SYNTHESIS = "weight style" | "none" | "weight" | "style";
export type FONT_VARIANT = "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps" | "none";
export type FONT_VARIANT_CAPS = "normal" | "unicase" | "titling-caps" | "small-caps" | "petite-caps" | "all-small-caps" | "all-petite-caps";
export type FONT_VARIANT_EAST_ASIAN = "normal" | "jis78" | "jis83" | "simplified" | "traditional" | "full-width" | "proportional-width" | "ruby";
export type FONT_VARIANT_EMOJI = "auto" | "text" | "emoji" | "unicode";
export type FONT_VARIANT_LIGATURES =
  | "normal"
  | "none"
  | "common-ligatures"
  | "no-common-ligatures"
  | "discretionary-ligatures"
  | "no-discretionary-ligatures"
  | "historical-ligatures"
  | "no-historical-ligatures"
  | "contextual"
  | "no-contextual";
export type FONT_VARIANT_NUMERIC =
  | "normal"
  | "ordinal"
  | "slashed-zero"
  | "lining-nums"
  | "oldstyle-nums"
  | "proportional-nums"
  | "tabular-nums"
  | "diagonal-fractions"
  | "stacked-fractions";
export type FONT_VARIANT_POSITION = "normal" | "sub" | "super";
export type FONT_WEIGHT = "normal" | "bold" | "lighter" | "bolder";
export type FOOTNOTE_DISPLAY = "normal" | "sub" | "super";
export type FOOTNOTE_POLICY = "auto" | "line" | "block";
export type FORCED_COLOR_ADJUST = "auto" | "none";
export type GAP = "grid-gap" | string;
export type GRID = string;
export type GRID_AREA = string;
export type GRID_AUTO_COLUMNS = "auto" | "min-content" | "max-content" | "min-content max-content auto;";
export type GRID_AUTO_FLOW = "row" | "column" | "dense" | "row dense" | "column dense";
export type GRID_AUTO_ROWS = "auto" | "min-content" | "max-content" | "min-content max-content auto;";
export type GRID_COLUMN = string;
export type GRID_COLUMN_END = "auto" | string;
export type GRID_COLUMN_START = "auto" | string;
export type GRID_ROW = string;
export type GRID_ROW_END = "auto" | string;
export type GRID_ROW_START = "auto" | string;
export type GRID_TEMPLATE = string;
export type GRID_TEMPLATE_AREAS = "none" | string;
export type GRID_TEMPLATE_COLUMNS = "none" | "auto" | "max-content" | "min-content" | "subgrid" | "masonry";
export type GRID_TEMPLATE_ROWS = "none" | "auto" | "max-content" | "min-content" | "subgrid" | "masonry";
export type HANGING_PUNCTUATION = "none" | "first" | "last" | "force-end" | "allow-end" | "last force-end" | "first allow-end last";
export type HEIGHT = "auto" | "min-content" | "max-content";
export type HYPHENS = "manual" | "none" | "auto";
export type IMAGE_ORIENTATION = "from-image" | "none";
export type IMAGE_RENDERING = "auto" | "smooth" | "high-quality" | "crisp-edges" | "pixelated";
export type IMAGE_RESOLUTION = "1dppx" | "from-image" | "from-image snap";
export type INITIAL_LETTER = "normal" | string;
export type INITIAL_LETTER_ALIGN = "alphabetic" | "border-box" | "ideographic" | "hebrew" | "hanging";
export type INITIAL_LETTER_WRAP = "none" | "first" | "all" | "grid";
export type INLINE_SIZE = "auto" | "max-content" | "min-content" | "available" | "fit-content";
export type INLINE_SIZING = "normal" | "stretch";
export type INSET = string;
export type INSET_BLOCK = string;
export type INSET_BLOCK_END = "auto" | string;
export type INSET_BLOCK_START = "auto" | string;
export type INSET_INLINE = string;
export type INSET_INLINE_END = "auto" | string;
export type INSET_INLINE_START = "auto" | string;
export type ISOLATION = "auto" | "isolate";
export type JUSTIFY_CONTENT =
  | "flex-start"
  | "space-between"
  | "space-around"
  | "flex-end"
  | "center"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "center"
  | "center safe"
  | "center unsafe"
  | "left"
  | "right"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "safe"
  | "unsafe";
export type JUSTIFY_ITEMS =
  | "legacy"
  | "normal"
  | "stretch"
  | "left"
  | "right"
  | "center"
  | "legacy left"
  | "legacy right"
  | "legacy center"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "safe center"
  | "unsafe center"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "flex-start"
  | "flex-start"
  | "safe"
  | "unsafe";
export type JUSTIFY_SELF =
  | "auto"
  | "normal"
  | "stretch"
  | "left"
  | "right"
  | "center"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "safe center"
  | "unsafe center"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "flex-start"
  | "flex-start"
  | "safe"
  | "unsafe";
export type LEFT = "auto" | string;
export type LETTER_SPACING = "normal" | string;
export type LIGHTING_COLOR = "white" | string;
export type LINE_BREAK = "auto" | "strict" | "normal" | "loose" | "anywhere";
export type LINE_CLAMP = "none" | "-webkit-line-clamp";
export type LINE_GRID = "match-parent" | "create";
export type LINE_HEIGHT = "normal" | string;
export type LINE_PADDING = string;
export type LINE_SNAP = "none" | "baseline" | "contain";
export type LIST_STYLE = string;
export type LIST_STYLE_IMAGE = "none" | string;
export type LIST_STYLE_POSITION = "outside" | "inside";
export type LIST_STYLE_TYPE =
  | "disc"
  | "none"
  | "circle"
  | "square"
  | "decimal"
  | "cjk-decimal"
  | "decimal-leading-zero"
  | "lower-roman"
  | "upper-roman"
  | "lower-greek"
  | "lower-alpha"
  | "lower-latin"
  | "upper-alpha"
  | "upper-latin"
  | "arabic-indic"
  | "armenian"
  | "bengali"
  | "cambodian"
  | "cjk-earthly-branch"
  | "cjk-heavenly-stem"
  | "cjk-ideographic"
  | "devanagari"
  | "ethiopic-numeric"
  | "georgian"
  | "gujarati"
  | "gurmukhi"
  | "hebrew"
  | "hiragana"
  | "hiragana-iroha"
  | "japanese-formal"
  | "japanese-informal"
  | "kannada"
  | "katakana"
  | "katakana-iroha"
  | "khmer"
  | "korean-hangul-formal"
  | "korean-hanja-formal"
  | "korean-hanja-informal"
  | "lao"
  | "lower-armenian"
  | "malayalam"
  | "mongolian"
  | "myanmar"
  | "oriya"
  | "persian"
  | "simp-chinese-formal"
  | "simp-chinese-informal"
  | "tamil"
  | "telugu"
  | "thai"
  | "tibetan"
  | "trad-chinese-formal"
  | "trad-chinese-informal"
  | "upper-armenian"
  | "disclosure-open"
  | "disclosure-closed"
  | "khmer"
  | "khmer"
  | "khmer";
export type MARGIN = string;
export type MARGIN_BLOCK = string;
export type MARGIN_BLOCK_END = string;
export type MARGIN_BLOCK_START = string;
export type MARGIN_BOTTOM = "auto" | string;
export type MARGIN_BREAK = "auto" | "keep" | "discard";
export type MARGIN_INLINE = string;
export type MARGIN_INLINE_END = string;
export type MARGIN_INLINE_START = string;
export type MARGIN_LEFT = "auto" | string;
export type MARGIN_RIGHT = "auto" | string;
export type MARGIN_TOP = "auto" | string;
export type MARGIN_TRIM = "none" | "in-flow" | "all";
export type MASK = string;
export type MASK_BORDER = string;
export type MASK_BORDER_MODE = "alpha" | "luminance";
export type MASK_BORDER_REPEAT = "stretch" | "repeat" | "round" | "space" | "stretch space" | "repeat round";
export type MASK_BORDER_SLICE = string;
export type MASK_BORDER_SOURCE = "none" | string;
export type MASK_BORDER_WIDTH = "auto" | string;
export type MASK_CLIP = "border-box" | "content-box" | "padding-box" | "fill-box" | "stroke-box" | "view-box" | "no-clip";
export type MASK_COMPOSITE = "add" | "subtract" | "intersect" | "exclude";
export type MASK_IMAGE = "none" | string;
export type MASK_MODE = "match-source" | "alpha" | "luminance";
export type MASK_ORIGIN = "border-box" | "content-box" | "padding-box" | "fill-box" | "stroke-box" | "view-box";
export type MASK_POSITION = "top" | "bottom" | "left" | "right" | "center" | "right bottom" | "left top" | "center center";
export type MASK_REPEAT = "repeat" | "no-repeat" | "space" | "round" | "repeat-y" | "repeat-x" | "repeat no-repeat" | "round round" | "space space";
export type MASK_SIZE = "auto" | "auto auto" | "cover" | "contain";
export type MASK_TYPE = "luminance" | "alpha";
export type MAX_BLOCK_SIZE = "none" | string;
export type MAX_HEIGHT = "none" | "min-content" | "max-content";
export type MAX_LINES = "none" | string;
export type MAX_WIDTH = "none" | "min-content" | "max-content";
export type MIN_HEIGHT = "auto" | "min-content" | "max-content";
export type MIN_WIDTH = "auto" | "min-content" | "max-content";
export type MIX_BLEND_MODE =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";
export type NAV_DOWN = "auto" | "current";
export type NAV_LEFT = "auto" | "current";
export type NAV_RIGHT = "auto" | "current";
export type NAV_UP = "auto" | "current";
export type OBJECT_FIT = "fill" | "none" | "cover" | "scale-down" | "contain scale-down" | "cover scale-down";
export type OBJECT_POSITION = "top" | "bottom" | "left" | "right" | "center" | "right bottom" | "left top" | "center center";
export type OFFSET = string;
export type OFFSET_ANCHOR = "auto" | "top" | "bottom" | "left" | "right" | "center" | "right bottom" | "left top" | "center center";
export type OFFSET_DISTANCE = string;
export type OFFSET_PATH = "none" | "content-box" | "padding-box" | "border-box" | "padding-box" | "fill-box" | "stroke-box" | "view-box";
export type OFFSET_POSITION = "auto" | "top" | "bottom" | "left" | "right" | "center" | "right bottom" | "left top" | "center center";
export type OFFSET_ROTATE = "auto" | "reverse";
export type OPACITY = "1" | string;
export type ORDER = string;
export type ORPHANS = "2" | string;
export type OUTLINE = string;
export type OUTLINE_COLOR = "currentColor" | "invert" | "invert";
export type OUTLINE_OFFSET = string;
export type OUTLINE_STYLE = "none" | "auto" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type OUTLINE_WIDTH = "medium" | "thin" | "thick";
export type OVERFLOW = string;
export type OVERFLOW_ANCHOR = "auto" | "none";
export type OVERFLOW_BLOCK = "visible" | "hidden" | "clip" | "scroll" | "auto" | "overflow-y";
export type OVERFLOW_CLIP_MARGIN = string;
export type OVERFLOW_INLINE = "visible" | "hidden" | "clip" | "scroll" | "auto" | "overflow-x";
export type OVERFLOW_WRAP = "normal" | "break-word" | "anywhere" | "word-wrap";
export type OVERFLOW_X = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type OVERFLOW_Y = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type OVERSCROLL_BEHAVIOR = string;
export type OVERSCROLL_BEHAVIOR_BLOCK = "auto" | "contain" | "none";
export type OVERSCROLL_BEHAVIOR_INLINE = "auto" | "contain" | "none";
export type OVERSCROLL_BEHAVIOR_X = "auto" | "contain" | "none";
export type OVERSCROLL_BEHAVIOR_Y = "auto" | "contain" | "none";
export type PADDING = string;
export type PADDING_BLOCK = string;
export type PADDING_BLOCK_END = string;
export type PADDING_BLOCK_START = string;
export type PADDING_BOTTOM = string;
export type PADDING_INLINE = string;
export type PADDING_INLINE_END = string;
export type PADDING_INLINE_START = string;
export type PADDING_LEFT = string;
export type PADDING_RIGHT = string;
export type PADDING_TOP = string;
export type PAGE = "auto" | string;
export type PAGE_BREAK_AFTER = "auto" | "always" | "avoid" | "left" | "right" | "break-after";
export type PAGE_BREAK_BEFORE = "auto" | "always" | "avoid" | "left" | "right" | "break-before";
export type PAGE_BREAK_INSIDE = "auto" | "avoid" | "break-inside";
export type PAGE_ORIENTATION = "upright" | "rotate-left" | "rotate-right" | "@page";
export type PERSPECTIVE = "none" | string;
export type PERSPECTIVE_ORIGIN = "top" | "bottom" | "left" | "right" | "center" | "right bottom" | "left top" | "center center";
export type PLACE_CONTENT = string;
export type PLACE_ITEMS = string;
export type PLACE_SELF = string;
export type POINTER_EVENTS = "auto" | "none";
export type POSITION = "static" | "relative" | "absolute" | "sticky" | "fixed";
export type QUOTES = "auto" | "none" | ":before" | ":after";
export type RESIZE = "none" | "both" | "horizontal" | "vertical" | "block" | "inline" | "overflow" | "visible";
export type RIGHT = "auto" | string;
export type ROTATE = "none" | string;
export type ROW_GAP = "normal" | "grid-row-gap";
export type SCALE = "none" | string;
export type SCROLL_BEHAVIOR = "auto" | "smooth";
export type SCROLL_MARGIN = string;
export type SCROLL_MARGIN_BLOCK = string;
export type SCROLL_MARGIN_BLOCK_END = string;
export type SCROLL_MARGIN_BLOCK_START = string;
export type SCROLL_MARGIN_BOTTOM = string;
export type SCROLL_MARGIN_INLINE = string;
export type SCROLL_MARGIN_INLINE_END = string;
export type SCROLL_MARGIN_INLINE_START = string;
export type SCROLL_MARGIN_LEFT = string;
export type SCROLL_MARGIN_RIGHT = string;
export type SCROLL_MARGIN_TOP = string;
export type SCROLL_PADDING = string;
export type SCROLL_PADDING_BLOCK = string;
export type SCROLL_PADDING_BLOCK_END = string;
export type SCROLL_PADDING_BLOCK_START = string;
export type SCROLL_PADDING_BOTTOM = string;
export type SCROLL_PADDING_INLINE = string;
export type SCROLL_PADDING_INLINE_END = string;
export type SCROLL_PADDING_INLINE_START = string;
export type SCROLL_PADDING_LEFT = string;
export type SCROLL_PADDING_RIGHT = string;
export type SCROLL_PADDING_TOP = string;
export type SCROLL_SNAP_ALIGN = "none" | "start" | "end" | "center" | "start end" | "end center";
export type SCROLL_SNAP_STOP = "normal" | "always";
export type SCROLL_SNAP_TYPE = "none" | "x" | "y" | "block" | "inline" | "both" | "x mandatory" | "block proximity" | "mandatory" | "proximity";
export type SCROLLBAR_COLOR = "auto" | "dark" | "light";
export type SCROLLBAR_GUTTER = "auto" | "stable" | "always" | "stable both force" | "always both force";
export type SCROLLBAR_WIDTH = "auto" | "thin" | "none";
export type SHAPE_IMAGE_THRESHOLD = "x" | string;
export type SHAPE_INSIDE = "auto" | "outside-shape" | "display";
export type SHAPE_MARGIN = string;
export type SHAPE_OUTSIDE = "none" | "margin-box" | "border-box" | "padding-box" | "content-box";
export type SHAPE_PADDING = "none" | string;
export type SPATIAL_NAVIGATION_ACTION = "auto" | "focus" | "scroll";
export type SPATIAL_NAVIGATION_CONTAIN = "auto" | "contain";
export type SPATIAL_NAVIGATION_FUNCTION = "normal" | "grid";
export type STRING_SET = "none" | string;
export type TAB_SIZE = "8" | string;
export type TABLE_LAYOUT = "auto" | "fixed";
export type TEXT_ALIGN = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent" | "justify-all";
export type TEXT_ALIGN_ALL = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
export type TEXT_ALIGN_LAST = "auto" | "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
export type TEXT_COMBINE_UPRIGHT = "none" | "all" | "digits";
export type TEXT_DECORATION = string;
export type TEXT_DECORATION_COLOR = string;
export type TEXT_DECORATION_LINE =
  | "none"
  | "underline"
  | "overline"
  | "line-through"
  | "blink"
  | "underline overline"
  | "underline line-through blink"
  | "underline overline line-through blink"
  | "spelling-error"
  | "grammar-error";
export type TEXT_DECORATION_SKIP = "none" | "auto";
export type TEXT_DECORATION_STYLE = "solid" | "double" | "dotted" | "dashed" | "wavy";
export type TEXT_DECORATION_THICKNESS = "auto" | "from-font";
export type TEXT_EMPHASIS = string;
export type TEXT_EMPHASIS_POSITION = "over right" | "over all" | "under right" | "under all";
export type TEXT_EMPHASIS_STYLE =
  | "none"
  | "filled"
  | "open"
  | "dot"
  | "circle"
  | "double-circle"
  | "triangle"
  | "sesame"
  | "filled circle"
  | "open sesame"
  | "filled"
  | "open";
export type TEXT_GROUP_ALIGN = "none" | "start" | "end" | "left" | "right" | "center";
export type TEXT_INDENT = string;
export type TEXT_JUSTIFY = "auto" | "none" | "inter-word" | "inter-character";
export type TEXT_ORIENTATION = "mixed" | "upright" | "sideways";
export type TEXT_OVERFLOW = "clip" | "ellipsis" | "fade";
export type TEXT_RENDERING = "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";
export type TEXT_SHADOW = "none" | string;
export type TEXT_SIZE_ADJUST = "auto" | "none";
export type TEXT_SPACE_TRIM = "none" | "trim-inner" | "discard-before" | "discard-after";
export type TEXT_SPACING =
  | "normal"
  | "none"
  | "auto"
  | "trim-start"
  | "space-start"
  | "space-first"
  | "trim-end"
  | "space-end"
  | "allow-end"
  | "trim-adjacent"
  | "space-adjacent"
  | "no-compress"
  | "ideograph-alpha"
  | "ideograph-numeric"
  | "punctuation"
  | "trim-start space-end trim-adjacent no-compress ideograph-numeric punctuation";
export type TEXT_TRANSFORM = "none" | "capitalize" | "uppercase" | "lowercase" | "capitalize" | "full-width" | "full-size-kana";
export type TEXT_UNDERLINE_OFFSET = "auto" | string;
export type TEXT_UNDERLINE_POSITION = "auto" | "from-font" | "under" | "left" | "right" | "from-font left" | "from-font right" | "under left" | "under right";
export type TEXT_WRAP = "wrap" | "nowrap" | "balance" | "stable" | "pretty";
export type TOP = string;
export type TOUCH_ACTION = "auto" | "none" | "pan-x" | "pan-left" | "pan-right" | "pan-y" | "pan-up" | "pan-down" | "manipulation";
export type TRANSFORM = "none" | string;
export type TRANSFORM_BOX = "view-box" | "content-box" | "border-box" | "fill-box" | "stroke-box";
export type TRANSFORM_ORIGIN = "top" | "right" | "left" | "center" | "bottom";
export type TRANSFORM_STYLE = "flat" | "preserve-3d";
export type TRANSITION = string;
export type TRANSITION_DELAY = string;
export type TRANSITION_DURATION = string;
export type TRANSITION_PROPERTY = "all" | "none" | "color" | "color, border-bottom";
export type TRANSITION_TIMING_FUNCTION = "ease" | "linear" | "step-start" | "step-end" | "ease-in" | "ease-out" | "ease-in-out";
export type TRANSLATE = "none" | string;
export type UNICODE_BIDI = "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";
export type USER_SELECT = "auto" | "text" | "none" | "contain" | "all";
export type VERTICAL_ALIGN = "baseline" | "top" | "middle" | "bottom" | "sub" | "super" | "text-top" | "text-bottom";
export type VISIBILITY = "visible" | "hidden" | "collapse";
export type WHITE_SPACE = "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";
export type WIDOWS = "2" | string;
export type WIDTH = "auto" | "min-content" | "max-content";
export type WILL_CHANGE = "auto" | "scroll-position" | "contents" | "transform" | "top, width";
export type WORD_BREAK = "normal" | "keep-all" | "break-all" | "break-word";
export type WORD_SPACING = "normal" | string;
export type WORD_WRAP = "normal" | "break-word" | "overflow-wrap" | "anywhere";
export type WRAP_AFTER = "auto" | "avoid" | "avoid-line" | "avoid-flex" | "line" | "flex";
export type WRAP_BEFORE = "auto" | "avoid" | "avoid-line" | "avoid-flex" | "line" | "flex";
export type WRAP_FLOW = "auto" | "both" | "start" | "end" | "minimum" | "maximum" | "clear";
export type WRAP_INSIDE = "auto" | "avoid";
export type WRAP_THROUGH = "wrap" | "none";
export type WRITING_MODE = "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
export type Z_INDEX = "auto" | string;
