import React from 'react';
import { Link } from 'react-router-dom';

const Repos = (props) => (
    <div>
        { props.repos &&
            <div>
                <h2>Repositories</h2>
                { props.repos.map((repo) => {
                    return (
                        <div key={repo.id}>
                            <span>{repo.name}</span>
                            <button>
                                <Link to={{
                                    pathname: `/repo/${repo.id}`,
                                    state: {repos: repo.name, reposOwner: repo.owner.login}
                                }}>View Commits</Link>
                            </button>
                        </div>
                    );
                })
                }
            </div>
        }
    </div>
);

export default Repos;