import {gameHistory} from "../../models/Game/Game";

export interface OwnProps {
    history: gameHistory;
}

export interface StateProps {
    page: string;
    // conditions: JobParam;
}

// export interface DispatchProps {
//     closeCompanyDetail: (v: boolean) => any;
//     initState: () => any;
//     initConditions: (companyType: string) => any;
//     toggleSearch: (v: boolean) => any;
// }
//
// const mapStateToProps = (state: RootState): StateProps => ({
//     page: state.job.list.page,
    // conditions: state.job.condition
// });
//
// const mapDispatchToProps = (dispatch: any): DispatchProps =>
//     bindActionCreators(
//         {
//             closeCompanyDetail: companyAction.toggleDetail,
//             initState: actions.initState,
//             initConditions: actions.initCondition,
//             toggleSearch: actions.toggleSearch
//         },
//         dispatch
//     );

// export default connect(
//     // mapStateToProps,
//     // mapDispatchToProps
// )(Game);
