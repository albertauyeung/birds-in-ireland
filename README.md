# Birds in Ireland

A fun, multilingual web app for kids aged 5–12 to discover the birds of Ireland.

- 16 bird species with kid-friendly descriptions, photos, and where to spot them
- 6 languages: English, 繁體中文, 简体中文, 廣東話, Français, Español
- 8 famous birding hotspots around the island
- Match-the-bird quiz mini-game

## Run locally

It's a static site — no build step. Open `index.html` directly, or:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How photos work

Photos load on demand from the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/),
which sources images from Wikimedia Commons (open licences). Each detail page links
back to the source Wikipedia article for credit and further reading.

## Data sources

- [BirdWatch Ireland](https://birdwatchireland.ie/)
- [eBird](https://ebird.org/region/IE) (Cornell Lab of Ornithology)
- [National Biodiversity Data Centre](https://records.biodiversityireland.ie/)
- [Wikipedia](https://en.wikipedia.org/) & [Wikimedia Commons](https://commons.wikimedia.org/)
