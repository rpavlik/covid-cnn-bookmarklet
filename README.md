# covid-cnn-bookmarklet

Generate bookmarklets to get to the latest CNN live news page for COVID-19.

## Using

It's deployed on GitHub Pages:

- Single-purpose pages that redirect immediately:
  - [Today's link](https://rpavlik.github.io/covid-cnn-bookmarklet/today.html)
  - [Yesterday's link](https://rpavlik.github.io/covid-cnn-bookmarklet/yesterday.html)
  - [Today's AMP link](https://rpavlik.github.io/covid-cnn-bookmarklet/today_amp.html)
  - [Yesterday's AMP link](https://rpavlik.github.io/covid-cnn-bookmarklet/yesterday_amp.html)
- All javascript links (bookmarklet links) on one page: <https://rpavlik.github.io/covid-cnn-bookmarklet/>
  - Not actually recommended, since they tend to change the URL pattern every few days. These "urls", if bookmarked, will go bad, while the ones above will not (as long as I notice the error and fix it in this repo)

## To build

```sh
npm install
npx gulp build
```

The most useful output will be `./dist/bookmarklets.html` - can copy links from there or import into some browsers.

## License

MIT
