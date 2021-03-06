"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const jwtHelper_1 = require("../auth/jwtHelper");
const fichas_controller_1 = require("../controllers/fichas.controller");
router.get('/:id', jwtHelper_1.isAuthenticated, fichas_controller_1.getFichas);
router.delete('/:id', jwtHelper_1.isAuthenticated, fichas_controller_1.deleteFicha);
router.put('/:id', jwtHelper_1.isAuthenticated, fichas_controller_1.updateFicha);
exports.default = router;
