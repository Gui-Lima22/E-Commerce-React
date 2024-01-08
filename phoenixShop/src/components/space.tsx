"use client"

import React from 'react';
import styled from "styled-components";

const Hr = styled.hr`
    border: none;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, transparent, #000, transparent);
    margin: 0;
`;

export const Space = () => <Hr />;