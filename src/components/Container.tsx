import React from "react";
import "../estilos/Container.css";

export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="background">
            <div className="container">
                {children}
            </div>
        </div>
    );
}