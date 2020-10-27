import React from "react";
import "./Chart.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import AreaChart from './AreaChart';

function Charts() {
    const [dateRange, setDateRange] = React.useState("1 Jan - 1 Jun");

    function handleDateRange(event) {
        setDateRange(event.target.value);
    }

    return (
        <div className="chart">
            <div className="chart__header">
                <h2 className="chart__title">Today: 5, Aug 2018</h2>
                <div className="chart__interaction">
                    <div className="chart__date-range">
                        <Select
                            labelId="label"
                            id="select"
                            variant="outlined"
                            onClick={handleDateRange}
                            value={dateRange}
                        >
                            <MenuItem value="1 Jan - 1 Jun">
                                1 Jan - 1 Jun
                            </MenuItem>
                            <MenuItem value="2 Jun - 31 Dec">
                                2 Jun - 31 Dec
                            </MenuItem>
                        </Select>
                    </div>
                    <div className="chart__buttons">
                        <Button>
                            <ChevronLeft />
                        </Button>
                        <Button>
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
            <AreaChart />
        </div>
    );
}

export default Charts;
