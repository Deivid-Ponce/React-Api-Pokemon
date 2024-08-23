import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Home.css';
import { AppButton, AppDiv, AppH1, AppImg } from './styles';


const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemon();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!pokemon) return <p>No Pokémon found!</p>;

    return (
        <AppDiv className="pokemon-detail">
            <AppH1 nombre='title'>{pokemon.name}</AppH1>
            <AppImg src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <AppButton variant='return'><a href='http://localhost:3000/'>Regresar</a></AppButton>
        </AppDiv>
    );
};

export default PokemonDetail;