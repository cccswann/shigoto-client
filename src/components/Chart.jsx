import React from "react";
import Chart from "react-google-charts";
import { withTheme } from "styled-components";



const JobChart = ({ jobs }) => {
    const ChartData = [['From','To','#']]
    let rejects = jobs.jobs.filter(job => job.status=== 'Rejected').length
	rejects = Number(rejects)
    if (rejects > 0){
        ChartData.push(['Applied', 'Rejected', rejects])
    }

    let offers = jobs.jobs.filter(job => job.status=== 'Offer').length
    offers = Number(offers)
    if (offers > 0) {
        ChartData.push(['Interviews', 'Offers', offers])
    }

    let interviews = jobs.jobs.filter(job => job.status=== 'Interview').length
	interviews = Number(interviews) + offers
    if (interviews > 0){
        ChartData.push(['Applied', 'Interviews', interviews])
    }

    let applied = Number(jobs.jobs.length)
    let pending = applied - rejects - interviews
    if (pending > 0){
        ChartData.push(['Applied', 'Pending', pending])
    }
    var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
    '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

    var options = {
        height: 400,
        sankey: {
            node: {
                colors: colors
            },
            link: {
                colorMode: 'gradient',
                colors: colors
            }
        }
    };

    return (
		<div style={{marginTop: '2rem'}}>
			<Chart
            width={'100%'}
            height={'500px'}
            chartType="Sankey"
            loader={<div>Loading Chart</div>}
            options={{
                animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 900,
                },
                sankey: {
                    node: {
                        colors: {colors},
                        label: {
                            fontSize: 18,
                            bold: true,
                            color: 'black',
                        },
                        nodePadding: 80,
                        interactivity: true,
                        labelPadding: 10,
                    },
                    link: {
                        colorMode: 'gradient',
                        colors: {colors}
                    },
                }
            }}
            data = {ChartData}
            rootProps={{ 'data-testid': '1' }}
            />
		</div>
	);
};

export default JobChart;
