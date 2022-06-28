import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../Journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='/auth/*' element={<AuthRoutes />} />

      {/* JournalAPp */}
      <Route path='/*' element={<JournalRoutes />} />
      {/*  */}
    </Routes>
  );
};
