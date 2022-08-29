# schaufel-compression

Compression & obfuscation for scraped data

Why msgpack and not protocol buffers (protobufs)?

- Protobufs are harder to setup and they may not always be fast: https://medium.com/@hugovs/the-need-for-speed-experimenting-with-message-serialization-93d7562b16e4
- The JS implemenation is not done by Google
- Not cool that we can't work with JSON schema, .proto format is yet another format to learn.

Decided against avro after reading this comment: https://news.ycombinator.com/item?id=20604597

msgpack is mature and supports Python + JS, and is flexible

See also: https://arxiv.org/pdf/2201.03051.pdf

## Release a new Version

Choose a new version according to <https://semver.org/>.

```bash
npm version major
npm version minor
npm version patch
npm version prerelease
```

Push tags to GitHub.
GitHub then publishes the package as a GitHub Package.

```bash
git push --follow-tags
```

## License

MIT
