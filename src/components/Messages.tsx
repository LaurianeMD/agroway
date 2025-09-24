import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Achieng',
      type: 'Buyer',
      lastMessage: 'Is the lettuce still available?',
      time: '2m ago',
      unread: 2,
      online: true,
      avatar: 'SA'
    },
    {
      id: 2,
      name: 'James Mwangi',
      type: 'Farmer',
      lastMessage: 'New corn harvest ready for pickup',
      time: '1h ago',
      unread: 0,
      online: true,
      avatar: 'JM'
    },
    {
      id: 3,
      name: 'Mary Wanjiku',
      type: 'Buyer',
      lastMessage: 'Thank you for the fresh tomatoes!',
      time: '3h ago',
      unread: 0,
      online: false,
      avatar: 'MW'
    },
    {
      id: 4,
      name: 'Peter Ochieng',
      type: 'Supplier',
      lastMessage: 'Seeds will arrive tomorrow morning',
      time: '1d ago',
      unread: 1,
      online: false,
      avatar: 'PO'
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      text: 'Hi! I saw your fresh lettuce listing. Is it still available?',
      time: '10:30 AM',
      sent: false
    },
    {
      id: 2,
      senderId: 'me',
      text: 'Yes, we still have 150kg available. All harvested yesterday morning.',
      time: '10:32 AM',
      sent: true
    },
    {
      id: 3,
      senderId: 1,
      text: 'Perfect! What\'s the quality grade and can you deliver to Kisumu?',
      time: '10:35 AM',
      sent: false
    },
    {
      id: 4,
      senderId: 'me',
      text: 'Grade A quality, organic certified. Yes, we deliver to Kisumu for orders above 100kg.',
      time: '10:37 AM',
      sent: true
    },
    {
      id: 5,
      senderId: 1,
      text: 'Great! I\'ll take 120kg. When can you deliver?',
      time: '10:40 AM',
      sent: false
    },
    {
      id: 6,
      senderId: 1,
      text: 'Is the lettuce still available?',
      time: '10:42 AM',
      sent: false
    }
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <div className="pb-20 pt-6 h-screen flex flex-col">
      {!selectedChat ? (
        // Chat List View
        <div className="px-4 flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-1">Messages</h1>
            <p className="text-muted-foreground text-sm">Connect with farmers and buyers</p>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-10 h-12 border-border/50 focus:border-primary transition-smooth"
            />
          </div>

          {/* Conversations */}
          <div className="space-y-2">
            {conversations.map((conv) => (
              <Card 
                key={conv.id} 
                className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
                onClick={() => setSelectedChat(conv.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {conv.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground truncate">{conv.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {conv.type}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <Badge className="bg-primary text-primary-foreground h-5 w-5 rounded-full text-xs flex items-center justify-center p-0">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        // Chat View
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="px-4 py-3 border-b border-border bg-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedChat(null)}
                  className="mr-2"
                >
                  ←
                </Button>
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {selectedConversation?.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{selectedConversation?.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedConversation?.online ? 'Online' : 'Last seen 2h ago'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sent 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sent ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="px-4 py-3 border-t border-border bg-card">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              
              <div className="flex-1 relative">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="pr-10 border-border/50 focus:border-primary transition-smooth"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                size="sm" 
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary-dark"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}