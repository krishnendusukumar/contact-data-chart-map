import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "../assets/marker.png"

type ObjectItem = {
    geocode: number[];
    popUpMsg: any;
};

type DataType = {
    data: ObjectItem[];
};


type DataProps = {
    name: String;
    active: String;
    deaths: String;
    recovered: String;
}

type ObjProps = {
    geocode: number[],
    popUpMsg: DataProps
}

const MapComponent: React.FC<DataType> = ({ data }) => {


    const customIcon = new Icon({
        iconUrl: marker,
        iconSize: [20, 20],
    });

    const markers = data;

    return (
        <>
            <MapContainer
                scrollWheelZoom={false}
                center={[28.62497207183455, 77.08135102907217]}
                zoom={3}
                style={{ height: "500px", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Wqqwdi7cJk8J1jUPS5jJ"
                />

                {markers.map((e) => {
                    return (
                        <>
                            <Marker position={[e.geocode[0], e.geocode[1]]} icon={customIcon}>
                                <Popup>
                                    <li>Name: {e.popUpMsg.name}</li>
                                    <li> Active Cases: {e.popUpMsg.active}</li>
                                    <li>Recovered: {e.popUpMsg.recovered}</li>
                                    <li>Deaths: {e.popUpMsg.deaths}</li>
                                </Popup>
                            </Marker>
                        </>
                    );
                })}
            </MapContainer>
        </>
    );
}



const Map = () => {


    const mapDataObj = useQuery({
        queryKey: ["map"],
        queryFn: () =>
            fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
                res.json()
            ),
    });
    const mapData = mapDataObj.data;

    let dataForMap = [];

    for (let i = 0; i < mapData?.length; i++) {
        let obj: ObjProps = {
            geocode: [],
            popUpMsg: {
                name: "",
                active: "",
                deaths: "",
                recovered: ""
            },
        };
        let popObjData: DataProps = {
            name: "",
            active: "",
            deaths: "",
            recovered: "",
        };
        let e = mapData[i];
        let cordinates = [];
        let lat = e.countryInfo.lat;
        let long = e.countryInfo.long;
        cordinates.push(lat);
        cordinates.push(long);

        popObjData["name"] = e.country;
        popObjData["active"] = e.active;
        popObjData["deaths"] = e.deaths;
        popObjData["recovered"] = e.recovered;
        obj["geocode"] = cordinates;
        obj["popUpMsg"] = popObjData;

        dataForMap.push(obj);
    }

    return (
        <div
            style={{ padding: "20px" }}
            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
            <div className=" font-bold border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Covid Cases in Map
            </div>
            <MapComponent data={dataForMap} />
        </div>
    )
}

export default Map
