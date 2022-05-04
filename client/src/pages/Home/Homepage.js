import React from 'react'
import Season from '../../components/Standings/Season'
import Tourney from '../../components/Standings/CurrentTourney'
import Daily from '../../components/Standings/CurrentDay'

function Home () {
    return (
        <main>
            <div> 
                <div>
                    <h2>Current Season Standings</h2>
                    <h3>Presented by: Bud Light</h3>
                </div>
                <Season />
            </div>

            <div>
                <div>
                    <h4>Current Tournament Standings</h4>
                    <h5>Presented by: Modelo</h5>
                </div>
                <Tourney />
            </div>

            <div>
                <div>
                    <h4>Current Day Standings</h4>
                    <h5>Presented by: Pacifico</h5>
                </div>
                <Daily />
            </div>


        </main>
    )
}