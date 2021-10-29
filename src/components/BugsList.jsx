import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBugs } from '../store/bugs';

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.entities.bugs.list);

  useEffect(() => {
    dispatch(loadBugs());
  }, [dispatch]);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
};

export default BugsList;
