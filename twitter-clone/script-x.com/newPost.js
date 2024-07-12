import { post } from "./newPostElement.js";

function renderPost() {
    let postHTML = ''; 
    post.forEach((eachPost, index) => {
        postHTML += `
            <div class="new-post">
                        <div style="
                            width: 50px;
                            padding-left: 10px;   
                            margin-right: 3px;
                        " class="new-post-account-img">
                            <img style="
                                border-radius: 40px;
                                width: 45px;
                            " class="img-${index + 1}" src=${eachPost.imgAccount}>
                        </div>
                            
                        <div style="
                            flex: 1;
                            padding-right: 20px;
                        " class="new-post-status-section">
                            <div class="new-post-account-date-info">
                                <div class="account-date-info">
                                    <div style="
                                        display: flex;
                                        align-items: center;  
                                        column-gap: 3px; 
                                    ">
                                        <div style="
                                            font-weight: bold;
                                        ">
                                            ${eachPost.name} 
                                        </div>

                                        <div class="auth">
                                            ${eachPost.auth ? eachPost.auth : ''}
                                        </div>

                                        <div style="
                                            color: gray;
                                        ">
                                            @${eachPost.accountName} · ${eachPost.date}
                                        </div>
                                    </div>
                                </div>
    
                                <div class="more-icon">
                                    ...
                                </div>
                            </div>
                            
                            <div class="new-post-account-content">
                                ${eachPost.postContent}
                            </div>
    
                            <div class="img-post js-img-post">
                                <img ${eachPost.postImgModify} src=${eachPost.postImg}>
                            </div>
    
                            <div class="post-tool">
                                <div class="reaction-post-1">
                                    <div class="reaction-container">
                                        <img src="img-x.com/reaction/react1.png">
                                        <div class="text">
                                            ${eachPost.replyCount}
                                        </div>
                                    </div>
                                    <div class="reaction-container">
                                        <img src="img-x.com/reaction/react2.png">
                                        <div class="text">
                                            ${eachPost.repostCount}
                                        </div>
                                    </div>
                                    <div class="reaction-container">
                                        <img src="img-x.com/reaction/react3.png">
                                        <div class="text">
                                            ${eachPost.likeCount}
                                        </div>
                                    </div>
                                    <div class="reaction-container">
                                        <img src="img-x.com/reaction/react4.png">
                                        <div class="text">
                                            ${eachPost.viewCount}
                                        </div>
                                    </div>
                                    <div class="reaction-post-2">
                                        <div>
                                            <img src="img-x.com/reaction/react5.png">
                                        </div>
                                        <div>
                                            <img src="img-x.com/reaction/react6.png">
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
        `
        
    });
    document.querySelector('.js-new-post-grid').innerHTML = postHTML;
    console.log(postHTML);
}

renderPost();
