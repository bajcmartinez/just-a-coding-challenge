import React, { FormEvent } from 'react';
import { connect } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { IProvidersState } from '../../reducers/providers';
import { handleQueryProviders, IReceiveProvidersAction } from "../../actions/providers";
import { IProvider, IProviderQuery } from "../../types/provider";
import List from './list';
import Filters from './filters';

interface DispatchProps {
    queryProviders: (query: IProviderQuery) => void
}

interface StateProps {
    providers: IProvider[];
}

type Props = StateProps & DispatchProps;

type State = Readonly<IProviderQuery>;

class Providers extends React.Component<Props> {
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {

        };

        // Bind functions
        this.refreshQuery = this.refreshQuery.bind(this as any);
        this.filterChanged = this.filterChanged.bind(this as any);

        props.queryProviders(this.state);
    }

    refreshQuery() {
        this.props.queryProviders(this.state);
    }

    filterChanged(event: FormEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;

        this.setState({
          [name]: value
        })
    }

    render() {
        const { providers } = this.props;

        return (
            <div>
                <Filters refreshQuery={this.refreshQuery} filterChanged={this.filterChanged} />
                <br />
                <List providers={providers} />
            </div>
        )
    }
}

const mapStateToProps = ({providers}: { providers: IProvidersState }) => ({
    providers: providers.list
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IProvidersState, null, IReceiveProvidersAction>): DispatchProps => ({
    queryProviders: (query: IProviderQuery) => dispatch(handleQueryProviders(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Providers);