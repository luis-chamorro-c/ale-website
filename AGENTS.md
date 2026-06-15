# AGENTS.md

## Layout Planning Communication

When the user asks how a section or page should be structured, explain it with a compact ASCII browser mockup that shows the elements in their intended visual positions.

Rules:

- Prefer an ASCII mockup over a long prose explanation.
- Show the page as a browser-like frame when useful.
- Place each major DOM element where it would appear on screen.
- Keep the mockup narrow enough to read in a terminal.
- After the ASCII mockup, include a short DOM tree.
- Do not drift into abstract layout theory when the user wants structure.
- Do not produce wide, token-heavy tables unless the user explicitly asks for them.

## Preferred Output Pattern

1. ASCII browser mockup
2. Short DOM tree
3. One short note clarifying which visuals are background vs DOM, if relevant

## Example Output

```text
+----------------------------------------------------------------------------------+
| by: Alejandra Chamorro                                          [brand design]   |
|----------------------------------------------------------------------------------|
|                                                                                  |
|  /----------------------------------------------------------------------------\  |
| /                                                                              \ |
||                                                                                ||
||  [ yibyo-band / indigo background ]                                            ||
||                                                                                ||
||   +------------------------+                         +----------------------+   ||
||   |                        |                         |        YibYo         |   ||
||   |   package art is       |                         | A case study in      |   ||
||   |   part of background   |                         | brand design.        |   ||
||   |   not DOM              |                         +----------------------+   ||
||   |                        |                                                   ||
||   |                        |                                                   ||
||   |                        |        +-------------------+                      ||
||   |                        |        |   Packaging       |                      ||
||   |                        |        | mascot + text     |                      ||
||   |                        |        +-------------------+                      ||
||   |                        |                                                   ||
||   |                        |   +-------------------+      +----------------+   ||
||   |                        |   |   Description     |      |   Guidelines   |   ||
||   |                        |   | mascot + text     |      | mascot + text  |   ||
||   |                        |   +-------------------+      +----------------+   ||
||   |                        |                                                   ||
||   |                        |              +-------------------+                ||
||   |                        |              |   Advertising     |                ||
||   |                        |              | mascot + text     |                ||
||   |                        |              +-------------------+                ||
||                                                                                ||
| \------------------------------------------------------------------------------/ |
|  \----------------------------------------------------------------------------/  |
|                                                                                  |
|                                                         View More Projects       |
+----------------------------------------------------------------------------------+
```

```text
brand-design-page
├── SignatureLink
├── Folder ("brand design")
└── yibyo-section
    ├── yibyo-band
    │   ├── yibyo-title-block
    │   ├── yibyo-callout-packaging
    │   ├── yibyo-callout-description
    │   ├── yibyo-callout-guidelines
    │   └── yibyo-callout-advertising
    ├── yibyo-bottom-folder
    └── yibyo-more-link
```

Note: package art, hills, and other decorative scene elements can live in the background layer when that keeps alignment stable.
