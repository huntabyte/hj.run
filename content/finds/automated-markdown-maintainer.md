---
title: Automated Markdown Maintainer
date: 2024-04-10
---

I manage a bunch of open source projects and repos, and often find myself needing to update the READMEs and other markdown files across all of them for things like NPM badges, contributors, and other metadata.

Doing this manually is a royal pain in the rear, so I was sniffing around for a solution and found [AutoMD](https://automd.unjs.io/) by the brilliant peeps at [UnJS](https://unjs.io/).

It uses syntax that looks like this in your markdown files:

```markdown
<!-- automd:generator [...args] -->
<!-- /automd -->
```

When you run their CLI, it will replace that block with the output of the generator script you built.

I use it to add badges and contributors to all my READMEs. It's a huge time saver and makes my projects look more professional. I highly recommend it!
