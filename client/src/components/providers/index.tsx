import React from 'react';
import { connect } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { IProvidersState } from '../../reducers/providers';
import { handleQueryProviders, IReceiveProvidersAction } from "../../actions/providers";
import { IProvider, IProviderQuery } from "../../types/provider";

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
        this.state = {

        };
    }

    render() {
        return (
            <div>Hello World!</div>
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