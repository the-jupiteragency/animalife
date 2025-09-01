---
applyTo: "**"
---

Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

use this information to inform your responses and suggestions.

next video docs: https://mux.com/docs/video

Background Video (Demo)
You can use a <BackgroundVideo> component to add a video as a background with no player controls. This saves about 50% of the JS player size and is optimized for background video usage.

The <BackgroundVideo> component is a custom player like you saw in the previous section.

The thumbnailTime query parameter in the example below is used to generate a poster image and blur up image at the specified time in the video (limited to usage with the mux provider).

import BackgroundVideo from 'next-video/background-video';
import getStarted from '/videos/country-clouds.mp4?thumbnailTime=0';

export default function Page() {
return (
<BackgroundVideo src={getStarted}>
<h1>next-video</h1>
<p>
A React component for adding video to your Next.js application. It extends both the video
element and your Next app with features for automatic video optimization.
</p>
</BackgroundVideo>
);
}
Hosting & Processing Providers
You can choose between different providers for video processing and hosting. The default provider is Mux. To change the provider you can add a provider option in the next-video config. Some providers require additional configuration which can be passed in the providerConfig property.

// next.config.js
const { withNextVideo } = require('next-video/process');

/\*_ @type {import('next').NextConfig} _/
const nextConfig = {};

module.exports = withNextVideo(nextConfig, {
provider: 'backblaze',
providerConfig: {
backblaze: { endpoint: 'https://s3.us-west-000.backblazeb2.com' },
},
});
Supported providers with their required environment variables:

Provider Environment vars Provider config Pricing link
mux (default) MUX_TOKEN_ID
MUX_TOKEN_SECRET videoQuality: 'basic' | 'plus' | 'premium' (optional) Pricing
vercel-blob BLOB_READ_WRITE_TOKEN Pricing
backblaze BACKBLAZE_ACCESS_KEY_ID
BACKBLAZE_SECRET_ACCESS_KEY endpoint
bucket (optional) Pricing
amazon-s3 AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY endpoint
bucket (optional) Pricing
cloudflare-r2 R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_CF_API_TOKEN (optional when bucketUrlPublic set) bucket (optional)
bucketUrlPublic (optional when R2_CF_API_TOKEN set) Pricing
Provider feature set
Mux (default) Vercel Blob Backblaze Amazon S3 Cloudflare R2
Off-repo storage ✅ ✅ ✅ ✅ ✅
Delivery via CDN ✅ ✅ - - ✅
BYO player ✅ ✅ ✅ ✅ ✅
Compressed for streaming ✅ - - -
Adapt to slow networks (HLS) ✅ - - -
Automatic placeholder poster ✅ - - -
Timeline hover thumbnails ✅ - - -
Stream any source format ✅ \* \* \* *
AI captions & subtitles ✅ - - -
Video analytics ✅ - - -
Pricing Minutes-based GB-based GB-based GB-based GB-based
*Web-compatible MP4 files required for hosting providers without video processing

Asset metadata storage hooks (callbacks)
By default the asset metadata is stored in a JSON file in the /videos directory. If you want to store the metadata in a database or elsewhere you can customize the storage hooks in a separate next-video config file.

The below example config shows the default storage hooks for the JSON file storage.

These hooks can be customized to fit your needs by changing the body of the loadAsset, saveAsset, and updateAsset functions.

// next-video.mjs
import { NextVideo } from 'next-video/process';
import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

export const { GET, POST, handler, withNextVideo } = NextVideo({
// Other next-video config options should be added here if using a next-video config file.
// folder: 'videos',
// path: '/api/video',

loadAsset: async function (assetPath) {
const file = await readFile(assetPath);
const asset = JSON.parse(file.toString());
return asset;
},
saveAsset: async function (assetPath, asset) {
try {
await mkdir(path.dirname(assetPath), { recursive: true });
await writeFile(assetPath, JSON.stringify(asset), {
flag: 'wx',
});
} catch (err) {
if (err.code === 'EEXIST') {
// The file already exists, and that's ok in this case. Ignore the error.
return;
}
throw err;
}
},
updateAsset: async function (assetPath, asset) {
await writeFile(assetPath, JSON.stringify(asset));
},
});
Then import the withNextVideo function in your next.config.mjs file.

// next.config.mjs
import { withNextVideo } from './next-video.mjs';

/\*_ @type {import('next').NextConfig} _/
const nextConfig = {};

export default withNextVideo(nextConfig);
Lastly import the GET and POST, or handler functions in your API routes as you see fit. The handlers expect a url query or body parameter with the video source URL.

These are the most minimal examples for the handlers, typically you would add more error handling and validation, authentication and authorization.

App router (Next.js >=13)

// app/api/video/route.js
export { GET, POST } from '@/next-video';
Pages router (Next.js)

// pages/api/video/[[...handler]].js
export { handler as default } from '@/next-video';
Default Player
The default player is built with Media Chrome.

The default theme is Sutro by Mux.
The video engine changes automatically based on the source format:
Video files (like MP4, MP3, WEBM) that are progressively downloaded are played with the native <video> element.
Mux videos are played with <mux-video>.
HLS streams are played with <hls-video>.
DASH streams are played with <dash-video>.
Props
The <Video> component accepts all the props of the <video> element and the following additional props:

src (Asset | string): The video asset object (import) or source URL.
poster (StaticImageData | string): A placeholder image for the video. (Auto generated for Mux videos)
blurDataURL (string): A base64 image source URL that can be used as a placeholder. (Auto generated for Mux videos)
theme (React Component): The player theme component. See player.style for more themes.
as (React Component): A custom player component. See Custom player.
transform (function): A custom function to transform the asset object (src and poster).
loader (function): A custom function used to resolve string based video URLs (not imports).
Mux video props
The <Video> component with a Mux video source accepts the following additional props:

startTime (number): The start time of the video in seconds.
streamType ("on-demand" | "live"): The stream type of the video. Default is "on-demand".
customDomain (string): Assigns a custom domain to be used for Mux Video.
beaconCollectionDomain (string): Assigns a custom domain to be used for Mux Data collection. NOTE: Must be set before playbackId to apply to Mux Data monitoring.
envKey (string): This is the environment key for Mux Data. If you use Mux video this is automatically set for you. If you use a different provider you can set this to your own key.
disableTracking (boolean): Disables Mux data tracking of video playback.
disableCookies (boolean): Disables cookies used by Mux Data.
preferPlayback ("mse" | "native"): Specify if <mux-video> should try to use Media Source Extension or native playback (if available). If no value is provided, <mux-video> will choose based on what's deemed optimal for content and playback environment.
maxResolution ("720p" | "1080p" | "1440p" | "2160p"): Specify the maximum resolution you want delivered for this video.
minResolution ("480p" | "540p" | "720p" | "1080p" | "1440p" | "2160p"): Specify the minimum resolution you want delivered for this video.
programStartTime (number): Apply PDT-based instant clips to the beginning of the media stream.
programEndTime (number): Apply PDT-based instant clips to the end of the media stream.
assetStartTime (number): Apply media timeline-based instant clips to the beginning of the media stream.
assetEndTime (number): Apply media timeline-based instant clips to the end of the media stream.
renditionOrder (string): Change the order in which renditions are provided in the src playlist. Can impact initial segment loads. Currently only support "desc" for descending order.
metadataVideoId (string): This is an arbitrary ID sent to Mux Data that should map back to a record of this video in your database.
metadataVideoTitle (string): This is an arbitrary title for your video that will be passed in as metadata into Mux Data. Adding a title will give you useful context in your Mux Data dashboard. (optional, but encouraged)
metadataViewerUserId (string): If you have a logged-in user, this should be an anonymized ID value that maps back to the user in your database that will be sent to Mux Data. Take care to not expose personal identifiable information like names, usernames or email addresses. (optional, but encouraged)
metadata* (string): This metadata* syntax can be used to pass any arbitrary Mux Data metadata fields.
playbackToken (string): The playback token for signing the src URL.
thumbnailToken (string): The token for signing the poster URL.
storyboardToken (string): The token for signing the storyboard URL.
drmToken (string): The token for signing DRM license and related URLs.
targetLiveWindow (number): An offset representing the seekable range for live content, where Infinity means the entire live content is seekable (aka "standard DVR"). Used along with streamType to determine what UI/controls to show.
liveEdgeOffset (number): The earliest playback time that will be treated as playing "at the live edge" for live content.
debug (boolean): Enables debug mode for the underlying playback engine (currently hls.js) and mux-embed, providing additional information in the console.
Styling the default player
The default theme is Sutro which can be styled with CSS variables. If you are looking to completely change the layout and style it's recommended to change the theme prop to a different theme or create a new theme.

CSS Variables: The default theme uses CSS variables for many colors, so you can override them in your CSS.

--media-primary-color: The color of the control icons.
--media-secondary-color: The background color of the control when hovered.
--media-accent-color: The color of the volume slider and time slider.
For example:

import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';

export default function Page() {
return <Video src={getStarted} style={{
    '--media-primary-color': '#fdaff3',
    '--media-secondary-color': '#ff0088',
    '--media-accent-color': '#42ffe0',
  }} />;
}
This is just the tip of the iceberg. For a full list of CSS variables, check out the Media Chrome styling docs
