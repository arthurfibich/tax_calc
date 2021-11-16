import type { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CalculatorPage } from './components/layout/CalculatorPage';
import { Main } from './components/layout/Main';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/calc" component={CalculatorPage} />
      </Switch>
    </BrowserRouter>
  );
};
