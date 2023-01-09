import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function User() {

    const [user, setUser] = useState({})
    const params = useParams()

    useEffect(() => {
        fetchUser()
        // setLoading(false)
    }, [])
    
    const cap = (string) => (string.charAt(0).toUpperCase() + string.slice(1));
    const fetchUser = async () => {
        console.log("fetching data");
        const response = await fetch(`https:/api.github.com/users/krishcshah`, {
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
        }
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

    return (<>
        <div className="mx-auto lg:w-10/12" style={{width : "90%"}}>
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
                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">{name}
                            <div className="ml-2 mr-1 badge-success badge">{type}
                            </div>
                            {!hireable ? <div className="mx-1 badge badge-info">Hireable</div>
                                :""}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default User