// import { Suspense, lazy, ElementType } from 'react';
import { Routes, Route } from "react-router-dom";

import PATHS from "@routes/paths";

// ----------------------------------------------------------------------
import { Dashboard } from "@pages/dashboard";

// ----------------------------------------------------------------------
export default function Router() {
  return (
    <Routes>
      <Route path={PATHS.root} element={<Dashboard />}></Route>
      {/* safety exit route */}
      {/* <Route path={PATHS.logout} element={<Logout />} /> */}
      {/* Email confirmation route */}
      {/* <Route
        path={PATHS.confirmEmail}
        element={
          <AuthGuard>
            <ConfirmEmail />
          </AuthGuard>
        }
      /> */}

      {/* PUBLIC routes */}
      {/* <Route element={<GuestGuard />}>
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.register} element={<Register />} />
        <Route path={PATHS.resetPassword} element={<ResetPassword />} />
        <Route path={PATHS.newPassword} element={<NewPassword />} />
        <Route path={PATHS.verify} element={<VerifyCode />} />
      </Route> */}

      {/* AUTH routes */}
      {/* <Route
        path={PATHS.root}
        element={
          <AuthGuard>
            <OrgsGuard />
          </AuthGuard>
        }
      >
       
       
      </Route> */}
    </Routes>
  );
}

// before enabling, read this: https://github.com/orgs/vercel/discussions/812
// ----------------------------------------------------------------------
// const Loadable =
//   (Component: ElementType, withLoader = false) =>
//   (props: any) => (
//     <Suspense fallback={<LoadingScreen withLoader={withLoader} id="loadable" />}>
//       <Component {...props} />
//     </Suspense>
//   );

// ----------------------------------------------------------------------
// lazy loading - vercel purges cache, so we can't have old chunks available anymore
// const OrganizationCreate = Loadable(lazy(() => import('../pages/OrganizationCreate')));
// const Overview = Loadable(lazy(() => import('../pages/Overview')));

// // DONORS
// const Donors = Loadable(lazy(() => import('../pages/donors')));
// const DonorDialog = Loadable(lazy(() => import('../pages/donors/dialogs/Donor')));

// const DonorsExport = Loadable(lazy(() => import('../pages/donors/dialogs/Export')));
// const DonorsEditView = Loadable(lazy(() => import('../pages/donors/dialogs/EditView')));
// const DonorsManageViews = Loadable(lazy(() => import('../pages/donors/dialogs/ManageViews')));

// // DONATIONS
// const Donations = Loadable(lazy(() => import('../pages/donations')));
// const DonationDialog = Loadable(lazy(() => import('../pages/donations/dialogs/Donation')));
// const DonationBatchDialog = Loadable(
//   lazy(() => import('../pages/donations/dialogs/DonationBatch'))
// );

// // REPORTS
// const Reports = Loadable(lazy(() => import('../pages/reports')));
// const ReportPicker = Loadable(lazy(() => import('../pages/reports/Picker')));

// // RECEIPTS
// const Receipts = Loadable(lazy(() => import('../pages/receipts/List')));
// const ReceiptsExport = Loadable(lazy(() => import('../pages/receipts/Export')));
// const ReceiptsView = Loadable(lazy(() => import('../pages/receipts/View')));
// const ReceiptsCreate = Loadable(lazy(() => import('../pages/receipts/Create')));
// const ReceiptsReissue = Loadable(lazy(() => import('../pages/receipts/Reissue')));
// const ReceiptsReissueBatch = Loadable(lazy(() => import('../pages/receipts/ReissueBatch')));

// // AUTHENTICATION
// const Login = Loadable(
//   lazy(() => import('../pages/auth/Login')),
//   true
// );
// const Logout = Loadable(
//   lazy(() => import('../pages/auth/Logout')),
//   true
// );
// const Register = Loadable(
//   lazy(() => import('../pages/auth/Register')),
//   true
// );
// const ResetPassword = Loadable(
//   lazy(() => import('../pages/auth/ResetPassword')),
//   true
// );
// const NewPassword = Loadable(
//   lazy(() => import('../pages/auth/NewPassword')),
//   true
// );
// const VerifyCode = Loadable(
//   lazy(() => import('../pages/auth/VerifyCode')),
//   true
// );

// // SETTINGS
// const Account = Loadable(lazy(() => import('../pages/settings/Account')));
// const ConfirmEmail = Loadable(lazy(() => import('../pages/settings/ConfirmEmail')));
// const SettingsAccountGeneral = Loadable(lazy(() => import('../pages/settings/Account/General')));
// const SettingsAccountSecurity = Loadable(lazy(() => import('../pages/settings/Account/Security')));

// const Organization = Loadable(lazy(() => import('../pages/settings/Organization')));
// const SettingsGeneral = Loadable(lazy(() => import('../pages/settings/Organization/General')));
// const SettingsPreferences = Loadable(
//   lazy(() => import('../pages/settings/Organization/Preferences'))
// );
// const SettingsPreferencesAssign = Loadable(
//   lazy(() => import('../pages/settings/Organization/Preferences/AssignNumbers'))
// );
// const SettingsBilling = Loadable(lazy(() => import('../pages/settings/Organization/Billing')));
// const SettingsTags = Loadable(lazy(() => import('../pages/settings/Organization/Tags')));
// const SettingsTagsEdit = Loadable(lazy(() => import('../pages/settings/Organization/Tags/Dialog')));
// const SettingsCategories = Loadable(
//   lazy(() => import('../pages/settings/Organization/Categories'))
// );
// const SettingsCategoriesEdit = Loadable(
//   lazy(() => import('../pages/settings/Organization/Categories/Dialog'))
// );
// const SettingsPaymentMethods = Loadable(
//   lazy(() => import('../pages/settings/Organization/PaymentMethods'))
// );
// const SettingsPaymentMethodsEdit = Loadable(
//   lazy(() => import('../pages/settings/Organization/PaymentMethods/Dialog'))
// );
// const SettingsReceipts = Loadable(lazy(() => import('../pages/settings/Organization/Receipts')));
// const SettingsUsers = Loadable(lazy(() => import('../pages/settings/Organization/Users')));
// const SettingsSecurity = Loadable(lazy(() => import('../pages/settings/Organization/Security')));
