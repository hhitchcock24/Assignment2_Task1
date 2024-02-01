require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer"
      ], function (Map, MapView, Layer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 10,
          center: [-86.784, 36.165]
        });

        var layern = Layer.fromPortalItem({
          portalItem: {
            id: "d949ae68529f4562a84a9ae3804a0158"
          }
        })
          .then(addLayer)
          .catch(rejection);
        var layerh = Layer.fromPortalItem({
          portalItem: {
            id: "69c3956fb5ba47c69e5df94cf98492cc"
          }
        })
          .then(addLayer)
          .catch(rejection)
        // Adds the layer to the map once it loads
        function addLayer(layern) {
          map.add(layern);
        }
        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      });
       
