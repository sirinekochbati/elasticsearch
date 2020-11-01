
const elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({ host: 'localhost:9200', log: 'trace'});

class SearchController {

    index(req, res) {
        return res.render("index");
    }

    search(req, res) {
        client.search({
            index: 'flickrphotos', 
            body: {
                "size" : 4000,
                "query": {
                    "fuzzy" : {
                        "tags" : {
                            "value": req.body.query
                        }
                    }
                }
            }
        })
        .then(data => res.render("index", { items: data.hits.hits }))
        .catch(err => res.status(400).json({ err }));
    }
};

module.exports = SearchController;
