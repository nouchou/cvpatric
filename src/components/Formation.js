import React from "react";

function Formation({ datas }) {
    console.log(datas);
    return (
        <div className="cursus">
            <h2 className="h2">Formation</h2>
            {datas.map(item => (
                <div className="grid_row" key={item.id}>
                    <div className="grid_item">
                        <p className="grid_date">{item.date}</p>
                    </div>
                    <div className="grid_item">
                        <h3 className="grid_title">{item.title}</h3>
                        <p className="grid_location">{item.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Formation;
