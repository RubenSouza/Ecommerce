const axios = require("axios");
const mongoose = require("mongoose");
const Publisher = mongoose.model("Publisher");
const Developer = mongoose.model("Developer");
const Category = mongoose.model("Category");
const Game = mongoose.model("Game");

const PopulateController = {
  async populate(req, res) {
    for (let index = 1; index <= 20; index++) {
      let getGames = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.RAW_GAMES_KEY}&page=${index}`
      );

      let games = getGames.data.results;

      for (let game of games) {
        let existingGame = await Game.findOne({ name: game.name });

        if (existingGame) {
          console.log(`Jogo ${game.name} já existe no banco de dados.`);
          continue;
        }

        let getGame = await axios.get(
          `https://api.rawg.io/api/games/${game.id}?key=${process.env.RAW_GAMES_KEY}`
        );

        let gameDetails = getGame.data;

        let getGameScreenshots = await axios.get(
          `https://api.rawg.io/api/games/${game.id}/screenshots?key=${process.env.RAW_GAMES_KEY}`
        );

        let gameScreenshots = getGameScreenshots.data.results;

        function parseSystemRequirements(requirementsString) {
          let lines = requirementsString.split("\n");
          lines.shift();

          let requirements = {};
          lines.forEach(line => {
            if (line.trim() !== "") {
              let [key, value] = line.split(":");
              if (key && value) {
                let formattedKey = key.trim().toLowerCase();
                let formattedValue = value.trim();
                requirements[formattedKey] = formattedValue;
              }
            }
          });
          return requirements;
        }

        let pcRequirements = gameDetails.platforms.find(
          platform => platform.platform.name === "PC"
        );

        let minimumRequirements = pcRequirements
          ? pcRequirements.requirements.minimum
          : null;
        let recommendedRequirements = pcRequirements
          ? pcRequirements.requirements.recommended
          : null;

        let minimun = minimumRequirements
          ? parseSystemRequirements(minimumRequirements)
          : null;
        let recommended = recommendedRequirements
          ? parseSystemRequirements(recommendedRequirements)
          : null;

        const existingCategories = await Promise.all(
          gameDetails.genres.map(async genre => {
            const existingCategory = await Category.findOne({
              name: genre.name,
            });

            if (existingCategory) {
              return existingCategory._id;
            } else {
              const newCategory = await Category.create({
                name: genre.name,
                slug: genre.slug,
              });
              return newCategory._id;
            }
          })
        );

        const categories = existingCategories.filter(Boolean);

        const existingDevelopers = await Promise.all(
          gameDetails.developers.map(async developer => {
            const existingDeveloper = await Developer.findOne({
              name: developer.name,
            });

            if (existingDeveloper) {
              return existingDeveloper._id;
            } else {
              const newDeveloper = await Developer.create({
                name: developer.name,
                slug: developer.slug,
              });
              return newDeveloper._id;
            }
          })
        );

        const developers = existingDevelopers.filter(Boolean);

        const existingPublishers = await Promise.all(
          gameDetails.publishers.map(async publisher => {
            const existingPublisher = await Publisher.findOne({
              name: publisher.name,
            });

            if (existingPublisher) {
              return existingPublisher._id;
            } else {
              const newPublisher = await Publisher.create({
                name: publisher.name,
                slug: publisher.slug,
              });
              return newPublisher._id;
            }
          })
        );

        const publishers = existingPublishers.filter(Boolean);

        if (game && gameDetails && gameScreenshots) {
          let gameRegister = await axios.post(
            "http://localhost:3001/v1/api/games",
            {
              name: game.name,
              slug: game.slug,
              short_description: gameDetails.description_raw.substring(0, 160),
              description: gameDetails.description_raw,
              price: Math.random() * (100 - 1) + 1,
              rating: gameDetails.rating,
              release_date: gameDetails.released,
              cover: game.background_image,
              gallery: gameScreenshots.map(screenshot => screenshot.image),
              platforms: gameDetails.platforms.map(platform => {
                switch (platform.platform.name) {
                  case "PC":
                    return "647122d0d1d877c963bbd79d";
                  case "PlayStation 4":
                    return "647122a7d1d877c963bbd794";
                  case "PlayStation 5":
                    return "647122b3d1d877c963bbd797";
                  case "Xbox One":
                    return "64712292d1d877c963bbd791";
                  case "Xbox Series S/X":
                    return "647122bfd1d877c963bbd79a";
                }
              }),
              developers: developers,
              publishers: publishers,
              categories: categories,
              system_requirement: {
                minimun,
                recommended,
              },
            }
          );
        }
      }
    }
    return res.send("Populate complete!");
  },
};

module.exports = PopulateController;
