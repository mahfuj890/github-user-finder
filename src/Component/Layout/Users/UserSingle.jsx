import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaCodepen,FaCode, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../../../Context/github/GithubContext";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import RepoLlist from "../Repo/RepoLlist";
import { getUser } from "../../../Context/github/GithubActions";

const UserSingle = () => {
  const { user, loading,dispatch } = useContext(GithubContext);
  console.log({ user });
  const params = useParams();
  useEffect(() => {
    dispatch({type:"SET_LOADING"})

    const getUserData = async ()=>{
      const userData = await getUser(params.login);
      dispatch({type:"GET_USERSINGLE",playLoad:userData})
    }
    getUserData();
  }, []);
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    type,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    twitter_username,
    hireable,
    repos_url
  } = user;
  console.log({repos_url},"userSingle");
  if (loading) {
    return <Spinner />;
  } else {
    return (

      <>

        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back To Search
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-8 md:gap-8">
            <div className="custom_card_img mb-8 md:mb-0">
              <div className="card image-full rounded-lg shadow-xl">
                <figure>
                  <img src={avatar_url} alt="User Image" />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">{name}</h2>
                  <p>{login} </p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="card-titile text-3xl">
                  {name}
                  <div className="badge badge-success mr-1 ml-2">{type}</div>
                  {hireable && (
                    <div className="badge badge-info mx-1">Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className="card-actions mt-4">
                  <a
                    href={html_url}
                    target="_blank"
                    className="btn btn-outline"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-md">Location:</div>
                    <div className="text-lg stat-value">{location}</div>
                  </div>
                )}
                {blog && (
                  <div className="stat">
                    <div className="stat-title text-md">Website:</div>
                    <div className="text-lg stat-value">
                      <a href={`https://${blog}`} target="_blank ">
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter:</div>
                    <div className="text-lg stat-value">
                      <a href={`https://twitter.com/${twitter_username}`} target="_blank ">
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
                <div className="stat-title pr-5 text-white">
                  Followers
                </div>
                <div className="stat-value text-3xl md:text-4xl">
                  {followers}
                </div>

              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
                <div className="stat-title pr-5 text-white">
                  Following
                </div>
                <div className="stat-value text-3xl md:text-4xl">
                  {following}
                </div>

              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCode className="text-3xl md:text-5xl" />
                <div className="stat-title pr-5 text-white">
                  Public Repo
                </div>
                <div className="stat-value text-3xl md:text-4xl">
                  {public_repos}
                </div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
                <div className="stat-title pr-5 text-white">
                  Public Gists
                </div>
                <div className="stat-value text-3xl md:text-4xl">
                  {public_gists}
                </div>
              </div>
            </div>

          </div>

          {/* <RepoLlist repos={repos_url} /> */}
        </div>
      </>
    );
  }
};

export default UserSingle;
