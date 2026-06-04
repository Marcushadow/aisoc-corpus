## Summary

<!-- What does this PR do? 1–2 sentences. -->

## Type of Change

- [ ] New topic
- [ ] Bug fix
- [ ] Documentation update
- [ ] Other (describe below)

## Self-Review Checklist

- [ ] `./scripts/validate-content.sh` passes locally
- [ ] `npm run build` succeeds
- [ ] `npm test` passes
- [ ] LaTeX renders correctly (checked via `npm run preview`)
- [ ] WikiLinks point to existing topics or are flagged as planned
- [ ] At least one primary citation is included (for new topics)

## Related Issues

<!-- Link any related issues: Fixes #123, Relates to #456 -->

---

### Reviewer Guide

Reviewers — please verify:

- [ ] Frontmatter is complete and valid
- [ ] Content is technically accurate and well-explained
- [ ] LaTeX renders correctly on the preview deploy
- [ ] WikiLinks resolve or are flagged as planned
- [ ] Citations include at least one primary academic source
- [ ] Writing is clear, concise, and free of AI-generated slop
- [ ] Difficulty level is appropriate for the content depth

### Merge Rules

- **Do not merge without an approving review.**
- **The PR author merges** — not the reviewer.
- All CI checks must be green before merging.
- All review conversations must be resolved.
- Use **merge commit** (no squash, no rebase).
