import { observable } from 'mobx';
import axios from 'axios';
let baseURLMap = 'https://opendata.arcgis.com/datasets/2b6e4b8c48f0473fa668e5d9cc807795_0.geojson';

class AppStore {
    mapview
    apiMap = axios.create({baseURL: baseURLMap})
    @observable features = []

    constructor(props) {
        
    }

    getMapData = () => {
        this.apiMap.get().then(({data}) => {
            this.features = data.features
            this.mapview.fitToElements(true)
          })
    }
}

export default AppStore