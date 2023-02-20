import axios from "axios";

const baseUrl = 'https://wistful-enchanting-daemonosaurus.glitch.me/';

export const client = axios.create({
    baseURL: baseUrl,
});