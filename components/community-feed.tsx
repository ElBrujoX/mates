import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react'

export function CommunityFeed() {
  const posts = [
    { 
      author: "Alice Johnson", 
      avatar: "/avatars/alice.jpg", 
      content: "Just closed a successful trade on $SOL. Who else is bullish on Solana?",
      likes: 24,
      comments: 5,
    },
    { 
      author: "Bob Smith", 
      avatar: "/avatars/bob.jpg", 
      content: "New video analysis on the recent BTC price action. Check it out!",
      likes: 18,
      comments: 3,
    },
  ]

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <CardTitle>{post.author}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            <div className="flex justify-between items-center">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

