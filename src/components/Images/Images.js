import React, { Component } from 'react';

import {  Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



export default class Images extends Component {

    componentDidMount() {
        this.props.loadImages();
    }
    
    render() {
        const style = {
            Paper: {
                padding: 40,
                marginTop: 20, 
                marginButtom: 20
            }
        }
        const { images } = this.props;
        const ducati = this.props.vote.ducati;
        const harleyDavidson = this.props.vote.harleyDavidson;
        const yamaha = this.props.vote.yamaha;
        const kawasaki = this.props.vote.kawasaki;
        
        const somme = ducati === 0   && harleyDavidson === 0 && yamaha === 0 && kawasaki === 0 ? 1 : ducati + harleyDavidson + yamaha + kawasaki ;
        let urls = images.map(a => a.urls);
        //console.log(urls[0]);
        return (
            <Grid container spacing = {8} >
            <Grid item sm>
                <Paper style= {style.Paper} >
                     <div>
                        <img src = {urls[0]} height = "120" width = "120" alt = "" onClick = {this.props.voteDucati} ></img>
                        <p> { (( ducati / somme ) * 100).toFixed(2)}   % </p>
                    </div>
                </Paper>
            </Grid> 
            <Grid item sm>
                <Paper style= {style.Paper} >
                    <div>
                        <img src = {urls[1]} height = "120" width = "120" alt = "" onClick = {this.props.voteHarleyDavidson} ></img>
                        <p> { ( (harleyDavidson / somme ) * 100).toFixed(2)} % </p>
                    </div>
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style= {style.Paper} >
                    <div>
                        <img src = {urls[2]} height = "120" width = "120" alt = "" onClick = {this.props.voteYamaha} ></img>
                        <p> { (( yamaha / somme ) * 100).toFixed(2)} % </p>
                    </div>
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style= {style.Paper} >
                    <div>
                        <img src = {urls[3]} height = "120" width = "120" alt = "" onClick = {this.props.voteKawasaki} ></img>
                        <p> { (( kawasaki / somme ) * 100).toFixed(2)} % </p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
        );
    }
}

//connect our component with the store
