import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import LoadingAnim from '../components/layout/assets/loading.gif'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function User() {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        const lo = () => {
            setLoading(false);
        }
        fetchUser()
        // setLoading(false);
        if (document.readyState === 'complete') {
            setLoading(false)
        }
        else {
            window.addEventListener('load', lo);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', lo);
        }
    }, [])

    const cap = (string) => (string.charAt(0).toUpperCase() + string.slice(1));
    const fetchUser = async () => {
        console.log("fetching data");
        // try {
        console.log("login:" + params.login);
        const response = await fetch(`https://api.github.com/users/${params.login}`, {
            headers: {
                Authorization: `token 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`
                // Authorization: `token ${process.env.KEY}`
            }
        })
        if (response.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await response.json();
            console.log(data);
            setUser(data);
            // response.json().then((data) => {
            //     console.log(data);
            //     setUser(data);
            // });
        }
        //   } catch (error) {
        //     console.log('There was an error', error);
        //   }
    }

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable } = user;

    if (loading) return (
        <div className="flex-1 flex justify-center items-center font-bold mb-20">
            <img src={LoadingAnim} width="80px" alt="Loading..." />
        </div>
    )
    return (<>
        <div className="mx-auto lg:w-10/12" style={{ width: "90%" }}>
            <div className="mb-4">
                <Link to="/" className='btn btn-ghost'>Back to Search</Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8 mb-8">
                <div className="custom-card-image mb-6 md:mb-0 max-w-sm">
                    <div className="rounded-lg shadow-xl card image-full">
                        <figure>
                            <img src={avatar_url} alt="avatar" />
                        </figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title mb-0">{name}</h2>
                            <div>{login}</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mt-1">
                    <div className="mb-5">
                        <h1 className="text-2xl card-title">{name}
                            <div className="ml-2 mr-1 mt-1 badge-success badge">{type}
                            </div>
                            {!hireable ? <div className="mx-1 mt-1 badge badge-info">Hireable</div>
                                : ""}
                        </h1>
                        <p className='mt-4'>{bio}</p>
                        <a href={html_url} target="_blank" rel='noreferrer' className='btn btn-outline mt-5'>
                            Visit github profile
                        </a>
                    </div>
                    <div className="w-full shadow-md rounded-lg stats bg-base-100">
                        {location && (
                            <div className="stat">
                                <div className="stat-title text-md">
                                    Location
                                    <div className="stat-value text-lg">
                                        {location}
                                    </div>
                                </div>
                            </div>
                        )}
                        {twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-md">
                                    Twitter
                                    <div className="stat-value text-lg">
                                        <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer' >
                                            {twitter_username}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default User