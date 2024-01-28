import React from "react";
import { Text, View, Image, FlatList, Dimensions } from "react-native";

type moviesType = {
    title: string;
    poster_path: string;
};

type movieSliderProps = {
    movies: moviesType[];
};

const { width, height } = Dimensions.get("window");

function MovieSlider({ movies }: movieSliderProps) {
    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.title}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={{alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                        // style={{ width, height: width * (3 / 4), borderRadius: 8, resizeMode: 'cover', }}
                        style={{ width: width , height: height * 0.3, borderRadius: 8, resizeMode: 'contain'}}
                    />
                    <Text>{item.title}</Text>
                </View>
            )}
        />
    );
}

export default MovieSlider;
