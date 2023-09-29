/**
 * @type {{ [key: string]: JSX.Element }}
 */

export const socialIcons = {
linkedin: (
  <>
    <svg viewBox="0 0 25 25" className="social-before">
    <path d="M21.875 1.5625H3.12012C2.26074 1.5625 1.5625 2.27051 1.5625 3.13965V21.8604C1.5625 22.7295 2.26074 23.4375 3.12012 23.4375H21.875C22.7344 23.4375 23.4375 22.7295 23.4375 21.8604V3.13965C23.4375 2.27051 22.7344 1.5625 21.875 1.5625ZM8.17383 20.3125H4.93164V9.87305H8.17871V20.3125H8.17383ZM6.55273 8.44727C5.5127 8.44727 4.67285 7.60254 4.67285 6.56738C4.67285 5.53223 5.5127 4.6875 6.55273 4.6875C7.58789 4.6875 8.43262 5.53223 8.43262 6.56738C8.43262 7.60742 7.59277 8.44727 6.55273 8.44727ZM20.3271 20.3125H17.085V15.2344C17.085 14.0234 17.0605 12.4658 15.4004 12.4658C13.7109 12.4658 13.4521 13.7842 13.4521 15.1465V20.3125H10.21V9.87305H13.3203V11.2988H13.3643C13.7988 10.4785 14.8584 9.61426 16.4355 9.61426C19.7168 9.61426 20.3271 11.7773 20.3271 14.5898V20.3125Z" /></svg>
    <svg className="scale-125 social-after fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
    </svg>
  </>
),
github: (
    <>
    <svg viewBox="0 0 25 25" className="social-before">
    <path d="M8.49121 19.4043C8.49121 19.502 8.37891 19.5801 8.2373 19.5801C8.07617 19.5947 7.96387 19.5166 7.96387 19.4043C7.96387 19.3066 8.07617 19.2285 8.21777 19.2285C8.36426 19.2139 8.49121 19.292 8.49121 19.4043ZM6.97266 19.1846C6.93848 19.2822 7.03613 19.3945 7.18262 19.4238C7.30957 19.4727 7.45605 19.4238 7.48535 19.3262C7.51465 19.2285 7.42188 19.1162 7.27539 19.0723C7.14844 19.0381 7.00684 19.0869 6.97266 19.1846ZM9.13086 19.1016C8.98926 19.1357 8.8916 19.2285 8.90625 19.3408C8.9209 19.4385 9.04785 19.502 9.19434 19.4678C9.33594 19.4336 9.43359 19.3408 9.41895 19.2432C9.4043 19.1504 9.27246 19.0869 9.13086 19.1016ZM12.3438 0.390625C5.57129 0.390625 0.390625 5.53223 0.390625 12.3047C0.390625 17.7197 3.79883 22.3535 8.66699 23.9844C9.29199 24.0967 9.51172 23.7109 9.51172 23.3936C9.51172 23.0908 9.49707 21.4209 9.49707 20.3955C9.49707 20.3955 6.0791 21.1279 5.36133 18.9404C5.36133 18.9404 4.80469 17.5195 4.00391 17.1533C4.00391 17.1533 2.88574 16.3867 4.08203 16.4014C4.08203 16.4014 5.29785 16.499 5.9668 17.6611C7.03613 19.5459 8.82812 19.0039 9.52637 18.6816C9.63867 17.9004 9.95605 17.3584 10.3076 17.0361C7.57812 16.7334 4.82422 16.3379 4.82422 11.6406C4.82422 10.2979 5.19531 9.62402 5.97656 8.76465C5.84961 8.44727 5.43457 7.13867 6.10352 5.44922C7.12402 5.13184 9.47266 6.76758 9.47266 6.76758C10.4492 6.49414 11.499 6.35254 12.5391 6.35254C13.5791 6.35254 14.6289 6.49414 15.6055 6.76758C15.6055 6.76758 17.9541 5.12695 18.9746 5.44922C19.6436 7.14355 19.2285 8.44727 19.1016 8.76465C19.8828 9.62891 20.3613 10.3027 20.3613 11.6406C20.3613 16.3525 17.4854 16.7285 14.7559 17.0361C15.2051 17.4219 15.5859 18.1543 15.5859 19.3018C15.5859 20.9473 15.5713 22.9834 15.5713 23.3838C15.5713 23.7012 15.7959 24.0869 16.416 23.9746C21.2988 22.3535 24.6094 17.7197 24.6094 12.3047C24.6094 5.53223 19.1162 0.390625 12.3438 0.390625ZM5.13672 17.2314C5.07324 17.2803 5.08789 17.3926 5.1709 17.4854C5.24902 17.5635 5.36133 17.5977 5.4248 17.5342C5.48828 17.4854 5.47363 17.373 5.39062 17.2803C5.3125 17.2021 5.2002 17.168 5.13672 17.2314ZM4.60938 16.8359C4.5752 16.8994 4.62402 16.9775 4.72168 17.0264C4.7998 17.0752 4.89746 17.0605 4.93164 16.9922C4.96582 16.9287 4.91699 16.8506 4.81934 16.8018C4.72168 16.7725 4.64355 16.7871 4.60938 16.8359ZM6.19141 18.5742C6.11328 18.6377 6.14258 18.7842 6.25488 18.877C6.36719 18.9893 6.50879 19.0039 6.57227 18.9258C6.63574 18.8623 6.60645 18.7158 6.50879 18.623C6.40137 18.5107 6.25488 18.4961 6.19141 18.5742ZM5.63477 17.8564C5.55664 17.9053 5.55664 18.0322 5.63477 18.1445C5.71289 18.2568 5.84473 18.3057 5.9082 18.2568C5.98633 18.1934 5.98633 18.0664 5.9082 17.9541C5.83984 17.8418 5.71289 17.793 5.63477 17.8564Z" />
    </svg>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="social-after fill-white"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"/></svg>
    </>
),
instagram: (
  <>
    <svg viewBox="0 0 25 25" className="social-before">
    <path d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2812 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z" />
    </svg>
    
    <svg className="social-after fill-white" viewBox="0 0 24 24"><path d="M7.68 1.44c-3.442 0 -6.24 2.799 -6.24 6.24v8.64c0 3.442 2.799 6.24 6.24 6.24h8.64c3.442 0 6.24 -2.799 6.24 -6.24V7.68c0 -3.442 -2.799 -6.24 -6.24 -6.24H7.68zm10.08 3.84c0.528 0 0.96 0.432 0.96 0.96s-0.432 0.96 -0.96 0.96 -0.96 -0.432 -0.96 -0.96 0.432 -0.96 0.96 -0.96zM12 6.72c2.913 0 5.28 2.366 5.28 5.28S14.914 17.28 12 17.28 6.72 14.914 6.72 12 9.086 6.72 12 6.72zm0 0.96c-2.381 0 -4.32 1.939 -4.32 4.32s1.939 4.32 4.32 4.32 4.32 -1.939 4.32 -4.32 -1.939 -4.32 -4.32 -4.32z"/></svg>

    </>
),
twitter: (
    <>
    <svg viewBox="0 0 25 25" className="social-before">
    <path d="M22.4302 7.40801C22.446 7.63008 22.446 7.8522 22.446 8.07427C22.446 14.8477 17.2906 22.6523 7.86802 22.6523C4.96509 22.6523 2.26841 21.8115 0 20.3522C0.412451 20.3998 0.808984 20.4156 1.2373 20.4156C3.63257 20.4156 5.83755 19.6066 7.59834 18.2266C5.3458 18.179 3.45811 16.7037 2.80771 14.6732C3.125 14.7208 3.44224 14.7525 3.77539 14.7525C4.2354 14.7525 4.69546 14.6891 5.12373 14.5781C2.77603 14.1021 1.01519 12.04 1.01519 9.54951V9.48608C1.69727 9.8668 2.49048 10.1047 3.33115 10.1364C1.95107 9.21636 1.04692 7.64595 1.04692 5.86929C1.04692 4.91753 1.30068 4.04507 1.74487 3.28364C4.26709 6.39277 8.05835 8.42319 12.3096 8.64531C12.2303 8.2646 12.1827 7.86807 12.1827 7.47148C12.1827 4.64785 14.4669 2.34775 17.3064 2.34775C18.7816 2.34775 20.1141 2.96641 21.05 3.96577C22.208 3.7437 23.3184 3.31538 24.302 2.72847C23.9212 3.91821 23.1122 4.91758 22.0494 5.55205C23.0805 5.44106 24.0799 5.15547 24.9999 4.75894C24.302 5.77412 23.4295 6.67827 22.4302 7.40801Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="scale-110 social-after" viewBox="0 0 24 24"><path d="M5.28 1.92c-1.85 0 -3.36 1.51 -3.36 3.36v13.44c0 1.85 1.51 3.36 3.36 3.36h13.44c1.85 0 3.36 -1.51 3.36 -3.36V5.28c0 -1.85 -1.51 -3.36 -3.36 -3.36H5.28zm0 0.96h13.44c1.332 0 2.4 1.068 2.4 2.4v13.44c0 1.332 -1.068 2.4 -2.4 2.4H5.28c-1.332 0 -2.4 -1.068 -2.4 -2.4V5.28c0 -1.332 1.068 -2.4 2.4 -2.4zm1.001 3.36 4.427 6.29L6.24 17.76h1.2l3.81 -4.461L14.389 17.76h3.81L13.339 10.854 17.28 6.24h-1.2l-3.283 3.845L10.091 6.24h-3.81zm1.837 0.96h1.471l6.771 9.6H14.89L8.119 7.2z"/></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" className="hidden w-auto h-full scale-150 group-hover:block" viewBox="0 0 69.12 69.12"><path fill="#212121" fill-rule="evenodd" d="M54.72 60.48H14.4a5.76 5.76 0 0 1 -5.76 -5.76V14.4A5.76 5.76 0 0 1 14.4 8.64h40.32a5.76 5.76 0 0 1 5.76 5.76v40.32a5.76 5.76 0 0 1 -5.76 5.76z" clip-rule="evenodd"/><path fill="#fff" d="M49.329 48.96h-9.267l-20.148 -28.8h9.27l20.148 28.8zm-8.166 -2.442h3.69L28.08 22.602H24.39l16.776 23.916z"/><path fill="#fff" d="m22.848 48.96 10.371 -12.015 -1.356 -1.8 -11.958 13.815Zm12.36 -17.682 1.302 1.857 11.205 -12.975h-2.88Z"/></svg> */}
    </>
),
dev: (
  <>
  <svg className="scale-110 social-before" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M15.652 20.166a1.568 1.568 0 0 0 -0.936 -0.35h-1.402v8.396h1.402a1.572 1.572 0 0 0 0.938 -0.35c0.31 -0.234 0.466 -0.584 0.466 -1.05v-5.596c0.002 -0.466 -0.158 -0.816 -0.468 -1.05zM38.472 6H9.528C7.582 6 6.004 7.574 6 9.52v28.96c0.004 1.946 1.582 3.52 3.528 3.52h28.946c1.946 0 3.524 -1.574 3.528 -3.52V9.52A3.53 3.53 0 0 0 38.472 6zM18.39 26.828c0 1.51 -0.932 3.802 -3.884 3.796H10.778V17.33h3.806c2.848 0 3.804 2.288 3.806 3.798v5.7zm8.09 -7.124H22.2v3.088h2.618v2.376H22.2v3.086h4.284v2.376h-4.996a1.626 1.626 0 0 1 -1.666 -1.584V18.994a1.626 1.626 0 0 1 1.584 -1.664h5.078l-0.004 2.374zm8.33 9.264c-1.062 2.47 -2.962 1.98 -3.812 0l-3.096 -11.636h2.618l2.386 9.138 2.376 -9.138h2.62l-3.092 11.636z"/></svg>
  <svg xmlns="http://www.w3.org/2000/svg" className="social-after fill-black border border-white scale-90 rounded-sm" viewBox="0 0 48 48"><path width="512" height="512" rx="15%" d="M0.275 0H47.725A0.275 0.275 0 0 1 48 0.275V47.725A0.275 0.275 0 0 1 47.725 48H0.275A0.275 0.275 0 0 1 0 47.725V0.275A0.275 0.275 0 0 1 0.275 0z"/><path fill="#fff" d="M13.169 19.119h-1.635v9.794h1.636c0.952 -0.051 1.627 -0.813 1.638 -1.632v-6.53c-0.065 -0.972 -0.731 -1.619 -1.639 -1.632zm4.287 8.18c0 1.763 -1.088 4.435 -4.534 4.43h-4.35V16.217h4.442c3.322 0 4.44 2.668 4.441 4.433zm9.439 -8.312H21.9v3.602h3.053v2.772H21.9v3.601h4.996v2.772h-5.829c-1.046 0.027 -1.916 -0.8 -1.942 -1.846V18.159c-0.025 -1.045 0.802 -1.913 1.848 -1.94h5.924zm9.716 10.808c-1.237 2.883 -3.455 2.309 -4.447 0l-3.612 -13.575h3.053l2.785 10.661 2.772 -10.661h3.054z"/></svg>
  </>
),
}