import express from 'express';
import mongoose from 'mongoose';

import TruckCard from "../models/cardModel.js";

const router = express.Router()

export const getTrucks = async (req, res) => {
    try {
        const truckCards = await TruckCard.find({});

        res.status(200).json(truckCards);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export default router;