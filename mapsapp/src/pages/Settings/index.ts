import { connect } from 'react-redux';
import Settings from './Settings';
import * as UserSelectors from '../../store/selectors/userSelectors';
import { AppState } from './../../store/store';
// import * as UserActions from '../../store/actions/userActions';

const mapStateToProps = (state: AppState) => ({

  name: UserSelectors.nameSelector(state),
  lastName: UserSelectors.lastNameSelector(state),
  id: UserSelectors.idSelector(state)
});

export default connect(mapStateToProps)(Settings);

// const mapDispatchToProps = {
//   updateUserData: UserActions.SignUpSuccess,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Settings);

