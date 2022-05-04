import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Contact } from "./components/views/Contact";
import { Home } from "./components/views/Home";

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <MainLayout>
                    <Switch>
                        <Route path='/contact' component={Contact} />
                        <Route path='/' component={Home} />
                    </Switch>
                </MainLayout>
            </Router>
        </div>
    );
};
