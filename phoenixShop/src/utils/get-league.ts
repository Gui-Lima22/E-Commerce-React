import {FilterTypes} from "@/types/filter-types";

export const getLeague = (type: FilterTypes) => {
    switch (type) {
        case FilterTypes.PremierLeague: return "PremierLeague"
        case FilterTypes.LaLiga: return "LaLiga"
        case FilterTypes.SerieA: return "SerieA"
        case FilterTypes.Ligue1: return "Ligue1"
        case FilterTypes.Bundesliga: return "Bundesliga"
        case FilterTypes.PrimeiraLiga: return "PrimeiraLiga"
        case FilterTypes.Eredivisie: return "Eredivisie"
    }
}