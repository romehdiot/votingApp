import Images from './Images'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages, voteDucati, voteHarleyDavidson, voteYamaha, voteKawasaki } from '../../actions';

const mapStateToProps = ({ images, isLoading, error, vote }) => ({
    images,
    isLoading,
    error,
    vote
});

//bind the action with the store
const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    voteDucati: () => dispatch(voteDucati()),
    voteHarleyDavidson: () => dispatch(voteHarleyDavidson()),
    voteYamaha: () => dispatch(voteYamaha()),
    voteKawasaki: () => dispatch(voteKawasaki())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Images);
