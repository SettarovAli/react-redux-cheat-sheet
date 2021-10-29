import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadBugs, resolveBug, selectUnresolvedBugs } from '../store/bugs';

const BugsList = () => {
  const dispatch = useDispatch();
  // const bugs = useSelector((state) => state.entities.bugs.list);
  const bugs = useSelector(selectUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, [dispatch]);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          <p>{bug.description}</p>
          <button onClick={() => dispatch(resolveBug(bug.id))}>
            Resolve bug
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
