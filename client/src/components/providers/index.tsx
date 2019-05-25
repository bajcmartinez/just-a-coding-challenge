import React from 'react';
import { connect } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { IProvidersState } from '../../reducers/providers';
import { handleQueryProviders, IReceiveProvidersAction } from "../../actions/providers";
import { IProvider, IProviderQuery } from "../../types/provider";
import List from './list';

interface DispatchProps {
    queryProviders: (query: IProviderQuery) => void
}

interface StateProps {
    providers: IProvider[];
}

type Props = StateProps & DispatchProps;

class Providers extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        const params: IProviderQuery = {
            state: "test"
        };
        props.queryProviders(params);
        this.state = {

        };
    }

    render() {
        const { providers } = this.props;

        return (
            <div>
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