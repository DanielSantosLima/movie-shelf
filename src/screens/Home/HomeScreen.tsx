import { Button, FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./style";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieSlider from "../../components/MovieSlider";

const HomeScreen = () => {
    const [t, i18n] = useTranslation("global");

    const [popularList, setPopularList] = useState<any[]>([]);

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/discover/movie?api_key=9204b00758757bc7f82f5713853a2daa"
                );
                const json = await response.json();
                setPopularList(json.results);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        getPopularMovies();
    }, []);

    // Slice the first 5 items from popularList
    const firstFiveMovies = popularList.slice(0, 5);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <MovieSlider movies={firstFiveMovies} />
        </SafeAreaView>
    );
};

export default HomeScreen;
